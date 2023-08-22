import React, { useEffect, useRef, useState } from "react";
import Header from "./header";
import QtyInput from "../common/elements/qty";
import { BasketItemProps } from "../../types/BASKETS";


const BasketItem = ({is_summary}:BasketItemProps) => {
    
    let countInput;
    if(is_summary){
        countInput = <span className="qty__summary">x1</span>
    } else {
        countInput = <QtyInput is_cart={true} />
    }
    return (
        <div className="basket__item">
            
            <div className="basket__item--desc">
                <img src='/assets/cart/image-xx59-headphones.jpg' className="basket__item__image" />
                <div className="basket__item--info">
                    <div className="basket__item--name">XY11</div>
                    <div className="basket__item--price">$1200</div>
                </div>
            </div>
            
            <div className="basket__item__qty">
               {countInput}                
            </div>
        </div>
    )

}

export default BasketItem