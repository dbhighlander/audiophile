import './qty.css'
import { QtyProps } from "../../../../types/BASKETS";
import { useState } from 'react';

const QtyInput = ({is_cart,qty,qtyChangeHandler}:QtyProps) => {
    
    

    const handleInputChange = (amount:number) => {
        if(is_cart){
            if(amount >= 0){
                qtyChangeHandler(amount)
            }
        } else {
            if(amount >= 0){
                qtyChangeHandler(amount)
            }
        }
        
    }

    let containerClass = 'qty__container'
    if(is_cart){
        containerClass += ' qty__container--checkout'
    }
    
    return (
        <div className={containerClass}>
            <button className='qty__button' onClick={() => handleInputChange(qty - 1)}>-</button>
            <span className='qty__amount'>{qty}</span>
            <button className='qty__button' onClick={() => handleInputChange(qty + 1)}>+</button>
        </div>
    )
}

export default QtyInput