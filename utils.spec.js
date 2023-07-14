const { sum, greeting } = require("./utils");

test('sum - should be return 2+4= 6', ()=>{
    const resultInInt= sum(2, 4)
    expect(resultInInt).toBe(6)
    expect(resultInInt).toBeGreaterThan(5)
    expect(resultInInt).toBeGreaterThanOrEqual(6)

    let resultInFloat= sum(0.1, 0.3)
    expect(resultInFloat).toBe(0.4)
    resultInFloat= sum(0.102, 0.3)
    expect(resultInFloat).toBeCloseTo(0.4)
})

test('greeting - should be return Hello Amr', ()=>{
    const result= greeting("Amr");
    expect(result).toMatch("Hello Amr");
    expect(result).toMatch(/Hello Amr/);
    // expect(result).toMatch(/^Hello Amr$/); //this case will be failed

});