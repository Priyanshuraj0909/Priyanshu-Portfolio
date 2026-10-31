// Read-only diagnostics. No DNS, hosts, browser, firewall or hosting changes.
import { Resolver } from 'node:dns/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { isIP } from 'node:net';

const execute = promisify(execFile);
const hostname = 'priyanshu-portfolio-pi-ruby.vercel.app';
const backup = 'https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/';
const resolver = new Resolver({ timeout: 3000, tries: 1 });
// Quote http_code: curl emits 000 on connection failure, which is invalid JSON as a number.
const metrics = '{"http":"%{http_code}","remote":"%{remote_ip}","dnsSeconds":%{time_namelookup},"tcpSeconds":%{time_connect},"tlsSeconds":%{time_appconnect},"totalSeconds":%{time_total}}';

function timings(stdout) {
  const result = JSON.parse(stdout);
  return { ...result, http: Number(result.http) };
}

async function probe(url, address) {
  const args = ['--silent', '--show-error', '--output', '/dev/null', '--connect-timeout', '5', '--max-time', '8', '--write-out', metrics];
  // Per-request routing preserves hostname, SNI and certificate verification.
  // It compares paths only; a working edge does not repair public DNS routing.
  if (address) args.push('--resolve', `${hostname}:443:${address}`);
  args.push(url);
  try {
    const { stdout } = await execute('curl', args, { timeout: 10000 });
    const result = timings(stdout);
    return { ok: result.http === 200, ...result };
  } catch (error) {
    let timing = {};
    try { timing = timings(error.stdout); } catch { /* curl may not be installed. */ }
    return { ok: false, ...timing, error: error.stderr?.trim() || error.message };
  }
}

const [system, google] = await Promise.allSettled([
  resolver.resolve4(hostname),
  fetch(`https://dns.google/resolve?name=${hostname}&type=A`, { signal: AbortSignal.timeout(5000) })
    .then(response => { if (!response.ok) throw new Error(`DNS service HTTP ${response.status}`); return response.json(); })
    .then(body => { if (body.Status !== 0) throw new Error(`DNS status ${body.Status}`); return (body.Answer ?? []).filter(record => record.type === 1).map(record => record.data); }),
]);
const records = result => result.status === 'fulfilled' ? { addresses: result.value } : { error: result.reason.message };
const addresses = [...new Set([...(system.status === 'fulfilled' ? system.value : []), ...(google.status === 'fulfilled' ? google.value : [])])].filter(ip => isIP(ip) === 4).slice(0, 6);
const [normal, independentHost, ...edges] = await Promise.all([
  probe(`https://${hostname}/`), probe(backup),
  ...addresses.map(async address => ({ address, ...await probe(`https://${hostname}/`, address) })),
]);
const report = {
  checkedAt: new Date().toISOString(), hostname,
  dns: { defaultResolver: records(system), googlePublicDns: records(google) },
  normal, independentHost: { url: backup, ...independentHost }, edges,
  conclusion: normal.ok
    ? 'Reachable from this machine now. This does not prove recovery on another device/network or a permanent fix.'
    : edges.some(edge => edge.ok)
      ? 'Normal access failed but a per-request edge comparison succeeded. Investigate DNS and network routing; the public path is not repaired.'
      : 'Normal access failed. Compare a second network and inspect DNS, TCP/TLS timings and Vercel account state before assigning a cause.',
};
console.log(JSON.stringify(report, null, 2));
process.exitCode = normal.ok ? 0 : 1;
