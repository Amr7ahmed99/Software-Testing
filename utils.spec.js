const { sum, greeting, isEven, animals } = require("./utils");

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

    describe('isEven', ()=>{
        it('should return true for 6', ()=>{
            expect(isEven(6)).toBeTruthy()
        });

        it('should return false for 7', ()=>{
            expect(isEven(7)).toBeFalsy()
        })
    })

    describe('validation', ()=>{
        it('should return true for x is undefined', ()=>{
            let x;
            expect(x).toBeUndefined()
        })

        it('should return true for x is not null', ()=>{
            let x= 1;
            expect(x).not.toBeNull() 
        })
    })

    describe('animals', ()=>{
        it('should return true for cat', ()=>{
            expect(animals).toContain('cat')
        })
    })
    
});

