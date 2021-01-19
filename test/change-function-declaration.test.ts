import { circum } from "../src/change-function-declaration";

describe('change function declaration', () => {
    it('calculates the circumference of a circle given its radius', () => {
        expect(circum(10)).toEqual(62.83185307179586)
    })
})
