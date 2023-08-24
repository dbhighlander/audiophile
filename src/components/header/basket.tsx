import  { Fragment } from "react";
import './basket.css'
import { BasketProps } from "../../types/BASKETS";
import BasketItemContainer from "../../containers/header/basket-item-container";
const Basket = ({processCheckout,basket,total,handleRemoveAllFromCart}:BasketProps) => {
    
    return (
        <Fragment>
            <div className="basket">
                <div className="basket__header">
                    <span className="basket__cart-count">Cart({basket.length})</span>
                    {basket.length > 0 && <button className="basket__cart-remove-all" onClick={handleRemoveAllFromCart}>Remove All</button>}
                </div>
                <div className="basket__contents">
                    {basket.map((basketItem,i) => (
                        <BasketItemContainer is_summary={false} basketItem={basketItem} key={'basket-item-'+i}/>
                    ))}
                </div>
                <div className="basket__footer">
                    <div className="basket__summary">
                        <span className="total__text">Total</span>
                        <span className="total__amount">${total}</span>
                    </div>
                    {basket.length > 0 && <button onClick={()=> processCheckout()} className='button button--primary button--checkout'>Checkout</button>}
                </div>
            </div>

        </Fragment>
    )

}

export default Basket