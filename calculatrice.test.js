const calculatrice = require('./calculatrice.js');

describe("test sur la calculatrice", () => {

    it("tester l'addition", () => {
        expect(calculatrice(0, 0, '+')).toBe(0);
        expect(calculatrice(0, 1, '+')).toBe(1);
        expect(calculatrice(122, 13, '+')).toBe(135);
        expect(calculatrice(1.3, 11.6, '+')).toBe(12.9);
        expect(calculatrice('a', 11.6, '+')).toBe(null);
    });

    it("tester la multiplication", () => {
        expect(calculatrice(0, 0, '*')).toBe(0);
        expect(calculatrice(0, 1, '*')).toBe(0);
        expect(calculatrice(2, 13, '*')).toBe(26);
    });

    it("tester la soustraction", () => {
        expect(calculatrice(0, 0, '-')).toBe(0);
        expect(calculatrice(0, 1, '-')).toBe(-1);
        expect(calculatrice(23, 13, '-')).toBe(10);
    });

    it("tester la division", () => {
        expect(calculatrice(0, 0, '/')).toEqual(null);
        expect(calculatrice(12, 2, '/')).toEqual(6);
        expect(calculatrice(10, 3, '/')).toEqual(3.33);
    });

});
