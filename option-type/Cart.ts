export interface Item {
    readonly code: string;
    readonly outOfStock: boolean;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly discountPrice?: number;
}

export const cart: Array<Item> = [
    {
        code: 'tomato',
        outOfStock: false,
        name: 'Tomato',
        price: 7000,
        quantity: 2,
        discountPrice: 1000
    }, {
        code: 'orange',
        outOfStock: true,
        name: 'Orange',
        price: 15000,
        quantity: 3,
        discountPrice: 2000
    },
    {
        code: 'apple',
        outOfStock: false,
        name: 'Apple',
        price: 10000,
        quantity: 1,
    }
]