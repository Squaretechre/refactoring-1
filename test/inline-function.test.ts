import {getRating} from "../src/inline-function";

describe('inline function', () => {
    it('gives drivers a rating of 2 when they have more than 5 late deliveries', () => {
        expect(getRating({numberOfLateDeliveries: 6})).toEqual(2)
    })

    it('gives drivers a rating of 1 when they have 5 or less late deliveries', () => {
        expect(getRating({numberOfLateDeliveries: 5})).toEqual(1)
    })
})
