import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
const root=new URL('../dist/',import.meta.url);
const html=await readFile(new URL('index.html',root),'utf8');
const entry=html.match(/<script[^>]+src="(\/assets\/[^"?]+\.js)"/);
assert.ok(entry,'Missing application entry');
const js=await readFile(new URL(entry[1].slice(1),root));
assert.ok(js.length<=400_000,`Initial JavaScript exceeds 400 kB: ${js.length}`);
assert.ok(gzipSync(js).length<=130_000,'Initial JavaScript exceeds 130 kB gzip');
assert.ok(!/<link[^>]+(?:preload|modulepreload)[^>]+neural-scene/.test(html),'Optional WebGL must not preload on phones');
let fontBytes=0;
for(const file of await readdir(new URL('assets/',root))) {
 if(file.endsWith('.css')) {
  const css=await readFile(new URL(`assets/${file}`,root),'utf8');
  assert.ok(!/\.ttf(?:["')?]|$)/.test(css),'Runtime CSS must use compressed fonts');
  for(const match of css.matchAll(/url\(["']?([^"')]+\.woff2)["']?\)/g)) {
   const url=match[1].startsWith('/')
    ?new URL(match[1].slice(1),root)
    :new URL(match[1],new URL(`assets/${file}`,root));
   assert.ok((await stat(url)).isFile(),`Missing font: ${match[1]}`);
  }
 }
 if(file.endsWith('.woff2')) fontBytes+=(await stat(new URL(`assets/${file}`,root))).size;
}
assert.ok(fontBytes>0&&fontBytes<=150_000,`Font budget exceeded or fonts missing: ${fontBytes}`);
console.log(`PASS: initial JS ${js.length} bytes (${gzipSync(js).length} gzip), fonts ${fontBytes} bytes, optional WebGL stays deferred.`);
