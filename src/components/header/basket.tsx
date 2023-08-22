import  { Fragment } from "react";
import './basket.css'
import BasketItem from "./basket-item";
import { BasketProps } from "../../types/BASKETS";
const Basket = ({processCheckout}:BasketProps) => {
    
    return (
        <Fragment>
            

            <div className="basket">
                <div className="basket__header">
                    <span className="basket__cart-count">Cart(3)</span>
                    <button className="basket__cart-remove-all">Remove All</button>
                </div>
                <div className="basket__contents">
                    <BasketItem is_summary={false}/>
                    <BasketItem is_summary={false}/>
                    <BasketItem is_summary={false}/>
                </div>
                <div className="basket__footer">
                    <div className="basket__summary">
                        <span className="total__text">Total</span>
                        <span className="total__amount">$1012</span>
                    </div>
                    <button onClick={()=> processCheckout()} className='button button--primary button--checkout'>Checkout</button>
                </div>
            </div>

        </Fragment>
    )

}

export default Basket