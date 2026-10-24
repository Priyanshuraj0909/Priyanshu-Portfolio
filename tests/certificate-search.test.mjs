import test from 'node:test';
import assert from 'node:assert/strict';
import { certificates } from '../src/content/certificates.ts';
import { searchCertificates } from '../src/lib/certificate-search.ts';
test('canonical archive has 24 distinct originals and previews in issue-date order',()=>{
 const all=searchCertificates(certificates,'','all');
 assert.equal(all.length,24); assert.equal(new Set(all.map(c=>c.id)).size,24);
 assert.ok(all.every(c=>c.pdf&&c.preview));
 assert.ok(all.every((c,i)=>!i||all[i-1].issuedOn>=c.issuedOn));
});
test('search supports issuer, multiword title, case and credential ID; combines category',()=>{
 assert.equal(searchCertificates(certificates,'  MATLAB  PROGRAMMING ','MATLAB').length,1);
 assert.ok(searchCertificates(certificates,'infosys','all').length>1);
 assert.equal(searchCertificates(certificates,'0848984943PR','all').length,1);
 assert.equal(searchCertificates(certificates,'matlab','Business').length,0);
 assert.equal(searchCertificates(certificates,'nonexistent-credential','all').length,0);
});
test('draft records remain excluded and filtering never mutates source',()=>{
 const before=certificates.map(c=>c.id);
 assert.equal(searchCertificates([{...certificates[0],confirmedOn:null}],'','all').length,0);
 searchCertificates(certificates,'Python','all');assert.deepEqual(certificates.map(c=>c.id),before);
});
