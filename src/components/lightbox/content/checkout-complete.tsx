import React, { Fragment } from "react";
import './checkout-complete.css'
import CheckoutSummaryItem from "./checkout-summary-item";
import { CheckoutSummaryProps } from "../../../types/CHECKOUT";

const CheckoutComplete = ({basket,total,handleCheckoutComplete}:CheckoutSummaryProps) => {

    

    return (
        <Fragment>

            <div className="lightbox__content">
                <div className="order__summary__header">
                    <img className="icon--cash-delivery" src='/assets/checkout/icon-order-confirmation.svg' alt='icon cash'/>
                    <h2 className="order__summary__title">Thank you for your order</h2>
                    <p className="order__summary__text">You will receive an email confirmation shortly</p>
                </div>
                <div className='order__summary__container'>
                    <div className = 'order__summary__contents'>
                        {basket.map((basketItem,i) => (
                            <CheckoutSummaryItem basketItem={basketItem} key={'checkout-summary-item-'+i}/>
                        ))}
                        
                    </div>
                    <div className = 'order__summary__total'>
                        <p className="order__summary__total__text">Grand Total</p>
                        ${total}
                    </div>
                </div>
                <div className='order__summary__footer'>
                    <button onClick={handleCheckoutComplete} className='button button--primary button--checkout'>Continue Shopping</button>
                </div>
        
            </div>
      </Fragment>
    )
}

export default CheckoutComplete