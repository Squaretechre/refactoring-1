export interface Order {
    basePrice: number
}

export function isHighValue(anOrder: Order): boolean {
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);
}
