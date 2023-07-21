import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "./header";
import './basket.css'
const Basket = () => {
    
    return (
        <Fragment>
            

            <div className="basket">
                <div className="basket__header">
                    <span className="basket__cart-count">Cart(3)</span>
                    <button className="basket__cart-remove-all">Remove All</button>
                </div>
                <div className="basket__contents">
                    
                </div>
                <div className="basket__footer">
                    <div className="basket__summary">
                        <span className="total-text">Total</span>
                        <span className="total-amount">$1012</span>
                    </div>
                    <button className='btn'></button>
                </div>
            </div>

        </Fragment>
    )

}

export default Basket