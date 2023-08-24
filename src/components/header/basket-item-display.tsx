
import { BasketItemDisplayProps } from "../../types/BASKETS";


const BasketItemDisplay = ({basketItem}:BasketItemDisplayProps) => {

    return (
        <div className="basket__item">
            <div className="basket__item--desc">
                <img src={'/assets/cart/image-'+basketItem.product.slug+'.jpg'} alt={basketItem.product.name} className="basket__item__image" />
                <div className="basket__item--info">
                    <div className="basket__item--name">{basketItem.product.name}</div>
                    <div className="basket__item--price">${basketItem.product.price}</div>
                </div>
            </div>
            <div className="basket__item__qty">
                <span className="qty__summary">x{basketItem.qty}</span>             
            </div>
        </div>
    )

}

export default BasketItemDisplay