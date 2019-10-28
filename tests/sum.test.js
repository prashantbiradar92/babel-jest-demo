import sum from  '../src/sum';


describe('Test simple application', ()=>{
    let result  = sum(10,20);
    it('test1', async ()=>{
        console.log("done");
        expect(result).toBe(30);
    });


})