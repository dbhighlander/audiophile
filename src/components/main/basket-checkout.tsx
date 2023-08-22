import { Fragment } from "react";
import './basket-checkout.css'
import BasketItem from "../header/basket-item";
import { BasketCheckoutProps } from "../../types/CHECKOUT";
const BasketCheckout = ({handleCheckout}:BasketCheckoutProps) => {
    
    return (
        <Fragment>
            

            <div className="basket basket-checkout">
                <div className="basket__header">
                    <span className="basket__cart-count">Summary</span>
                </div>
                <div className="basket__contents">
                    <BasketItem is_summary={true}/>
                    <BasketItem is_summary={true}/>
                    <BasketItem is_summary={true}/>
                </div>
                <div className="basket__footer">
                    <div className="basket__summary basket__summary__amount">
                        <div className="basket__summary__row">
                            <span className="total__text">Total</span>
                            <span className="total__amount">$1012</span>
                        </div>
                        <div className="basket__summary__row">
                            <span className="total__text">Shipping</span>
                            <span className="total__amount">$50</span>
                        </div>
                        <div className="basket__summary__row">
                            <span className="total__text">VAT</span>
                            <span className="total__amount">$144.10</span>
                        </div>
                    </div>
                  
                    <div className="basket__summary">
                        <span className="total__text">Grand Total</span>
                        <span className="total__amount total__amount-bold">$1090.10</span>
                    </div>
                    <button onClick={() => handleCheckout()} className='button button--primary button--checkout'>Checkout</button>
                </div>
            </div>

        </Fragment>
    )

}

export default BasketCheckout