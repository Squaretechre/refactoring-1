import {calculateArea} from "../src/rename-variable";

describe('rename variable', () => {
    it('calculates area of a rectangle', () => {
        expect(calculateArea(10, 10)).toEqual(100)
    })
})
