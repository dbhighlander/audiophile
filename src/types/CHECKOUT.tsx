import { BasketDisplayItem } from "./BASKETS"

export type CheckoutProps = {
    isLightboxVisible:boolean,
    name:string,
    setName:React.Dispatch<React.SetStateAction<string>>
    email:string,
    setEmail:React.Dispatch<React.SetStateAction<string>>
    phoneNumber:string,
    setPhoneNumber:React.Dispatch<React.SetStateAction<string>>,
    address:string,
    setAddress:React.Dispatch<React.SetStateAction<string>>,
    city:string,
    setCity:React.Dispatch<React.SetStateAction<string>>,
    postCode:string,
    setPostCode:React.Dispatch<React.SetStateAction<string>>,
    country:string,
    setCountry:React.Dispatch<React.SetStateAction<string>>,
    paymentMethod:string,
    setPaymentMethod:React.Dispatch<React.SetStateAction<string>>,
    handleCheckout:Function,
    errors: Record<string, string>,
}

export type CheckoutSummaryProps = {
    basket:BasketDisplayItem[],
    total:number,
    handleCheckoutComplete:React.MouseEventHandler<HTMLButtonElement>
}

export type CheckoutSummaryItemProps = {
    basketItem:BasketDisplayItem
}
export type BasketCheckoutProps = {
    handleCheckout:Function,
    basket:BasketDisplayItem[]
}

export type BasketCheckoutContainerProps = {
    handleCheckout:Function,
}