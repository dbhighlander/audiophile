
import { Fragment } from "react";
import { ProductProps } from "../../types/PRODUCTS"
import { productImages } from "../../utilities/images";
import useWindowDimensions from "../../utilities/useWindowDimensions";
import './card.css'
import { Link } from "react-router-dom";
import QtyInput from "./elements/qty";
const Card = ({product,index,showPurchase}:ProductProps) => {

    const {view } = useWindowDimensions();
    const imageFilePath = product.image[view];
    const productImage = productImages[imageFilePath as keyof typeof productImages] 

    const imagePanel = (
        <Fragment>
            <div className='product__card-container product__card-panel'>
                <img  src={productImage} alt={product.name} className='product__card-image' />
            </div>
        </Fragment>
    )
    
    let inputPrompt = <Link to={product.slug}className="button button--primary product__card-button">See Product</Link>

    if(typeof showPurchase !== 'undefined' && showPurchase  ){
        inputPrompt = (
            <div className='product__card-purchase-input'>
                <QtyInput is_cart={false}/>
                <Link to={product.slug}className="button button--primary product__card-button">Add To Cart</Link>
            </div>
        )
    }

    const descriptionPanel = (
        <Fragment>
            <div className='product__card-panel '>
                <div className='product__card-display '>
                    {product.new ? <p className='product__promo'>New Product</p> : null }
                    <h2 className='product__card-title'>{product.name}</h2>
                    <p className='product__card-description'>{product.description}</p>
                    {typeof showPurchase !== 'undefined' && showPurchase &&
                        <p className="product__card-price">${product.price}</p>
                    }
                    {inputPrompt}
                </div>
            </div>
        </Fragment>
    )

    let cardPanels = (
        <Fragment>
            {imagePanel}
            {descriptionPanel}
        </Fragment>
        )

    if(view == 'desktop' && index !== undefined && index % 2 == 1){
        cardPanels = (
            <Fragment>
                {descriptionPanel}
                {imagePanel}
            </Fragment>
        )
    }

    let productCardClass = "product__card"
    if(typeof showPurchase !== 'undefined' && showPurchase  ){
        productCardClass += " product__item__card"
    }

    return (
        <div className={productCardClass}>
            {cardPanels}
        </div>
    )
}

export default Card