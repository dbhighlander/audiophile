import { Fragment } from "react";
import './basket-checkout.css'
import { BasketCheckoutProps } from "../../types/CHECKOUT";
import BasketItemDisplay from "../header/basket-item-display";
const BasketCheckout = ({handleCheckout,basket}:BasketCheckoutProps) => {

    let total = 0;
    let vat = 0;
    let shipping = 0;

    basket.forEach(basketItem => (
        total += basketItem.qty * basketItem.product.price
    ) )

    vat = Math.round(total * 0.2);
    shipping = Math.round(Math.min(100,total * 0.1))
    
    return (
        <Fragment>
            

            <div className="basket basket-checkout">
                <div className="basket__header">
                    <span className="basket__cart-count">Summary</span>
                </div>
                <div className="basket__contents">
                    {basket.map((basketItem,i) => (
                        <BasketItemDisplay basketItem={basketItem} key={'basket-item'+i}/>
                    ) )}
                    
                </div>
                <div className="basket__footer">
                    <div className="basket__summary basket__summary__amount">
                        <div className="basket__summary__row">
                            <span className="total__text">Total</span>
                            <span className="total__amount">${total}</span>
                        </div>
                        <div className="basket__summary__row">
                            <span className="total__text">Shipping</span>
                            <span className="total__amount">${shipping}</span>
                        </div>
                        <div className="basket__summary__row">
                            <span className="total__text">VAT</span>
                            <span className="total__amount">${vat}</span>
                        </div>
                    </div>
                  
                    <div className="basket__summary">
                        <span className="total__text">Grand Total</span>
                        <span className="total__amount total__amount-bold">${total + shipping + vat}</span>
                    </div>
                    <button onClick={() => handleCheckout()} className='button button--primary button--checkout'>Checkout</button>
                </div>
            </div>

        </Fragment>
    )

}

export default BasketCheckout