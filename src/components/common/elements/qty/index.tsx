import './qty.css'
import { QtyProps } from "../../../../types/BASKETS";
import { useState } from 'react';

const QtyInput = ({is_cart}:QtyProps) => {
    
    const [amount,setAmount] = useState(0);

    const handleInputChange = (amount:number) => {
        if(is_cart){
            if(amount > 0){
                setAmount(amount)
            }
        } else {
            if(amount >= 0){
                setAmount(amount)
            }
        }
        
    }

    let containerClass = 'qty__container'
    if(is_cart){
        containerClass += ' qty__container--checkout'
    }
    
    return (
        <div className={containerClass}>
            <button className='qty__button' onClick={() => handleInputChange(amount - 1)}>-</button>
            <span className='qty__amount'>{amount}</span>
            <button className='qty__button' onClick={() => handleInputChange(amount + 1)}>+</button>
        </div>
    )
}

export default QtyInput