import test from 'node:test';
import assert from 'node:assert/strict';
import { runCommand } from '../src/lib/terminal.ts';
import { terminalCommands } from '../src/content/terminal.ts';
import { profile } from '../src/content/profile.ts';
import { projects } from '../src/content/projects.ts';
import { journey } from '../src/content/journey.ts';
const context = { profile, projects, journey, commands: terminalCommands };
test('all twelve commands dispatch using approved content', () => {
  assert.equal(terminalCommands.length,12);
  for(const { name } of terminalCommands) {
    const result = runCommand(name,context);
    assert.equal(result.clear,name==='clear');
    if(name!=='clear') { assert.ok(result.lines.length); assert.ok(result.lines.every(l=>!l.text.startsWith('Unknown command'))); }
  }
  assert.equal(runCommand('projects',context).lines.length,4);
  assert.equal(runCommand('education',context).lines.length,3);
  assert.match(runCommand('education',context).lines[0].text,/expected completion: 2028/);
  assert.equal(runCommand('github',context).lines[0].href,profile.github);
});
test('normalizes case and whitespace; rejects arguments and shell-like input',()=>{
  assert.deepEqual(runCommand('  HeLP \t',context),runCommand('help',context));
  assert.deepEqual(runCommand(' \t ',context),{clear:false,lines:[]});
  for(const input of ['help projects','$(whoami)','<img src=x onerror=alert(1)>','github; clear']) {
    const result=runCommand(input,context);
    assert.equal(result.clear,false);
    assert.match(result.lines[0].text,/Unknown command/);
    assert.equal(result.lines[0].href,undefined);
  }
});
test('missing records never produce fabricated destinations or proficiency',()=>{
  for(const command of ['linkedin','resume','skills','experience']) {
    const result=runCommand(command,context);
    assert.ok(result.lines.every(l=>!l.href));
    assert.match(result.lines[0].text,/not been provided|No professional experience records/);
  }
  assert.match(runCommand('skills',context).lines[1].text,/Areas of interest/);
});
test('available optional profile links are returned without automatically opening them',()=>{
  const filled={...context,profile:{...profile,email:'hello@example.test',linkedin:'https://example.test/profile',resume:'/resume.pdf'}};
  assert.equal(runCommand('contact',filled).lines[1].href,'mailto:hello@example.test');
  assert.equal(runCommand('linkedin',filled).lines[0].href,'https://example.test/profile');
  assert.equal(runCommand('resume',filled).lines[0].href,'/resume.pdf');
});
