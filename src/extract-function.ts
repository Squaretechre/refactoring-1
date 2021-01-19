export interface Invoice {
    customer: string
    orders: { amount: number}[]
}

function printBanner(): void {
    console.log("*********************")
    console.log("*** Customer Owes ***")
    console.log("*********************")
}

function calculateOutstanding(invoice: Invoice): number {
    let outstanding = 0;
    for(const o of invoice.orders) {
        outstanding += o.amount
    }
    return outstanding
}

export function printOwing(invoice: Invoice): void {
    printBanner();
    let outstanding  = calculateOutstanding(invoice);

    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
}
