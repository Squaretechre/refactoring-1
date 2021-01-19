export interface Driver {
    numberOfLateDeliveries: number
}

export function getRating(driver: Driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver: Driver): boolean {
    return driver.numberOfLateDeliveries > 5;
}
