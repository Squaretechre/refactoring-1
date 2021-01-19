import {calculateOrderTotal} from "../src/extract-variable";

describe('inline function', () => {
    it('calculates the order total', () => {

        const total = calculateOrderTotal({
           itemPrice: 100,
           quantity: 10
        })

        expect(total).toEqual(1100)
    })
})
