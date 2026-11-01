import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldAutoLoadScene } from '../src/lib/scene-loading.ts';
const desktop={width:1440,coarsePointer:false};
test('phones and touch devices keep the optional renderer out of startup',()=>{
 for(const width of [320,390,430,759]) assert.equal(shouldAutoLoadScene({...desktop,width}),false);
 assert.equal(shouldAutoLoadScene({...desktop,coarsePointer:true}),false);
 assert.equal(shouldAutoLoadScene({width:844,coarsePointer:true}),false);
});
test('data saving and slow connections avoid automatic scene downloads',()=>{
 assert.equal(shouldAutoLoadScene({...desktop,saveData:true}),false);
 for(const effectiveType of ['slow-2g','2g','3g']) assert.equal(shouldAutoLoadScene({...desktop,effectiveType}),false);
});
test('desktop enhancement remains available when network hints are absent or fast',()=>{
 assert.equal(shouldAutoLoadScene(desktop),true);
 assert.equal(shouldAutoLoadScene({...desktop,width:760,effectiveType:'4g',saveData:false}),true);
});
