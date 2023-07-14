const { sum, greeting } = require("./utils");

describe('UNIT_TESTING', ()=>{
    describe('sum', ()=>{
        it('should return 2+4= 6', ()=>{
            const resultInInt= sum(2, 4)
            expect(resultInInt).toBe(6)
            expect(resultInInt).toBeGreaterThan(5)
            expect(resultInInt).toBeGreaterThanOrEqual(6)
    
        })
    
        it('should return 0.102+0.3= 0.402', ()=>{
            let resultInFloat= sum(0.102, 0.3)
            expect(resultInFloat).toBeCloseTo(0.4)
        })
    });
    
    describe('greeting', ()=>{
        it('should return Hello Amr', ()=>{
            const result= greeting("Amr");
            expect(result).toMatch("Hello Amr");
            expect(result).toMatch(/Hello Amr/);
            // expect(result).toMatch(/^Hello Amr$/); //this case will be failed
    
        })
    });
    
});

