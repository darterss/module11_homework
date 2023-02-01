const {add5} = require ('./index.js');

describe('add5 function', () =>{
    test ('should return sum of 5 and argument', () =>{
        expect(add5(5)).toBe(10);
        expect(add5(10)).toBe(15);
        expect(add5(Math.PI)).toBeCloseTo(8.14);
    }),

    test ('should return sum greater or equal then compare number', () =>{
        expect(add5(5)).toBeGreaterThan(1);
        expect(add5(10)).toBeGreaterThan(14);
        expect(add5(11)).toBeGreaterThanOrEqual(16);
    }),

    test ('should return sum less or equal then number', () =>{
        expect(add5(134)).toBeLessThanOrEqual(200);
        expect(add5(2)).toBeLessThanOrEqual(8);
        expect(add5(1)).toBeLessThanOrEqual(6);
    })
})


