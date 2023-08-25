import { CheckoutSummaryItemProps } from '../../../../types/CHECKOUT'
import './checkout-summary-item.css'

const CheckoutSummaryItem = ({basketItem}:CheckoutSummaryItemProps) => {


    return (
        <div className="order__summary__item">
            <img src={'assets/cart/image-'+basketItem.product.slug+'.jpg'} alt={basketItem.product.name} className="order__summary__image"/>
            <div className="order__summary__item__info">
                <p className="order__summary__item__name">{basketItem.product.name}</p>
                <p className="order__summary__item__price">${basketItem.qty * basketItem.product.price}</p>
            </div>
            <div className="order__summary__qty">x{basketItem.qty}</div>
        </div>
    )
}

export default CheckoutSummaryItem