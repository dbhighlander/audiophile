import React from "react";

import { BasketItemContainerProps,BasketItem as BasketItemType } from "../../types/BASKETS";
import BasketItem from "../../components/header/basket-item";
import { useBasket } from "../../providers/basket-provider";
import { removeCookie, setCookie } from "../../utilities/cookieService";


const BasketItemContainer = ({is_summary,basketItem}:BasketItemContainerProps) => {

    const {basket,setBasket} = useBasket()
    
    const qtyChangeHandler = (qty:number) => {
        let newBasket: BasketItemType[] = [];

        if(qty === 0){
            if(!window.confirm('This will remove your purchase.  Do you wish to continue?')){
                return;
            }
        }

        basket.forEach((existingBasketItem) => {
  
            if(existingBasketItem.slug === basketItem.product.slug){
                existingBasketItem.qty = qty;
            }

            if(existingBasketItem.qty > 0){
                newBasket.push(existingBasketItem)
            } 
        })

        if(newBasket.length > 0){
            setCookie('a-bsk',JSON.stringify(newBasket))
        } else {
            removeCookie('a-bsk')
        }
        
        setBasket(newBasket)
    }
    return (
        <BasketItem basketItem={basketItem} qtyChangeHandler={qtyChangeHandler}/>
    )
}

export default BasketItemContainer