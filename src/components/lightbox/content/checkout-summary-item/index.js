import './checkout-summary-item.css'

const CheckoutSummaryItem = (props) => {


    return (
        <div className="order__summary__item">
            <img src='/assets/cart/image-xx59-headphones.jpg'  className="order__summary__image"/>
            <div className="order__summary__item__info">
                <p className="order__summary__item__name">X12321</p>
                <p className="order__summary__item__price">$1230.00</p>
            </div>
            <div className="order__summary__qty">x1</div>
        </div>
    )
}

export default CheckoutSummaryItem