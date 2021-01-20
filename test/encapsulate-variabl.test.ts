import { printSpaceshipOwner } from "../src/encapsulate-variable";

describe('encapsulate variable', () => {
    it('prints the spaceship owner', () => {
        const spy = jest.spyOn(global.console, 'log')

        printSpaceshipOwner()

        expect(spy).toHaveBeenCalledWith('The spaceship owner is: Jeremy Usbourne')
    })
})
