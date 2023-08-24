import { Product } from "./PRODUCTS"

export type BasketItem = {
    slug: string,
    qty: number
}

export type BasketDisplayItem = {
    product: Product,
    qty: number
}

export type BasketItemProps = {
    basketItem:BasketDisplayItem,
    qtyChangeHandler:Function
}

export type BasketItemDisplayProps = {
    basketItem:BasketDisplayItem
}

export type BasketItemContainerProps = {
    is_summary:boolean,
    basketItem:BasketDisplayItem,
}

export type QtyProps = {
    is_cart:boolean,
    qty:number,
    qtyChangeHandler:Function
}

export type BasketProps = {
    processCheckout:Function,
    basket:BasketDisplayItem[],
    total:number,
    handleRemoveAllFromCart:React.MouseEventHandler<HTMLButtonElement>
}


