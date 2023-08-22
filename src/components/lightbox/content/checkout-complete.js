import React, { Fragment } from "react";
import './checkout-complete.css'
import CheckoutSummaryItem from "./checkout-summary-item";

const CheckoutComplete = (props) => {

    // const titleTheme = props.theme === 'dark' ? 'lightbox__title--dark' : '';
    // let taskViewDropdown = null;

    // if(props.taskDropdownOpen){
    //     taskViewDropdown = (
    //     <div className="task__toggle-dropdown" ref={props.wrapperRef}>
    //         <ul className='task__toggle-dropdown-list'>
    //             <li className="task__toggle-dropdown-list-item " onClick={(e) => props.setTaskEditMode()}>Edit Task</li>
    //             <li className="task__toggle-dropdown-list-item task__toggle-dropdown-list-item--red " onClick={(e) => props.setTaskDeleteMode()}>Delete Task</li>
    //         </ul>
    //     </div>
    //     )
    // }


    return (
        <Fragment>

            <div className="lightbox__content">
                <div className="order__summary__header">
                    <img className="icon--cash-delivery" src='/assets/checkout/icon-order-confirmation.svg'/>
                    <h2 className="order__summary__title">Thank you for your order</h2>
                    <p className="order__summary__text">You will receive an email confirmation shortly</p>
                </div>
                <div className='order__summary__container'>
                    <div className = 'order__summary__contents'>
                        <CheckoutSummaryItem />
                        <CheckoutSummaryItem />
                        <CheckoutSummaryItem />
                    </div>
                    <div className = 'order__summary__total'>
                        <p className="order__summary__total__text">Grand Total</p>
                        $5050.00
                    </div>
                </div>
                <div className='order__summary__footer'>
                    <button className='button button--primary button--checkout'>Checkout</button>
                </div>
        
            </div>
      </Fragment>
    )
}

export default CheckoutComplete