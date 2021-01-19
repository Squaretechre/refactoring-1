import { printOwing} from "../src/extract-function";

describe('extract method', () => {
    it('prints an invoice showing how much the customer owes', () => {
        const spy = jest.spyOn(global.console, 'log')

        printOwing({
            customer: 'Alan Partridge',
            orders: [{
                amount: 10
            }]
        })

        expect(spy).toHaveBeenNthCalledWith(1, '*********************')
        expect(spy).toHaveBeenNthCalledWith(2, '*** Customer Owes ***')
        expect(spy).toHaveBeenNthCalledWith(3, '*********************')
        expect(spy).toHaveBeenNthCalledWith(4, 'name: Alan Partridge')
        expect(spy).toHaveBeenNthCalledWith(5, 'amount: 10')
    })
})
