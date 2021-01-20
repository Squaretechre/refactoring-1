export interface Owner {
    firstName: string,
    lastName: string,
}

export interface Spaceship {
    owner?: Owner
}

let spaceship: Spaceship = {}

let defaultOwner = { firstName: 'Mark', lastName: 'Corrigan'}

spaceship.owner = defaultOwner

defaultOwner = { firstName: 'Jeremy', lastName: 'Usbourne' }

spaceship.owner = defaultOwner

export function printSpaceshipOwner(): void {
    // there is a bonus smell here
    console.log(`The spaceship owner is: ${spaceship.owner.firstName} ${spaceship.owner.lastName}`)
}
