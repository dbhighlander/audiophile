

export type BasketItem = {
    slug: string,
    qty: number
}

export type Basket = {
    basketItem:BasketItem[]
}

export type BasketItemProps = {
    is_summary:boolean
}

export type QtyProps = {
    is_cart:boolean
}

export type BasketProps = {
    processCheckout:Function
}


