const multiplesOfThreeOrFive = require('./main');

describe('problem 1', () =>{
    test('solves with the given information', () => {
        expect(multiplesOfThreeOrFive(10)).toEqual(23);
    });

    test('gives 0 when 3 is entered', () => {
        expect(multiplesOfThreeOrFive(3)).toEqual(0);
    });

    test('gives 3 when 5 is entered', () => {
        expect(multiplesOfThreeOrFive(5)).toEqual(3);
    });

    test('gives 8 when 6 is entered', () => {
        expect(multiplesOfThreeOrFive(6)).toEqual(8);
    });

    test('returns NaN when a string is entered', () => {
        expect(multiplesOfThreeOrFive('hi')).toBeNaN();
    });

    test('returns 0 when a negative number is entered', () => {
        expect(multiplesOfThreeOrFive(-678)).toEqual(0);
    });

    test('returns the correct value when a quotient is entered', () => {
        expect(multiplesOfThreeOrFive(10.3)).toEqual(23);
    });
})