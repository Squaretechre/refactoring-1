import { isHighValue } from "../src/inline-variable";

describe('inline variable', () => {
    it('identifies orders with a base price greater than 1000 as high value', () => {
        expect(isHighValue({ basePrice: 1001 })).toBeTruthy()
    })

    it('does not identify orders with a base price of 1000 or less as high value', () => {
        expect(isHighValue({ basePrice: 999 })).toBeFalsy()
    })
})
