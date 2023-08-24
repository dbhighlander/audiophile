
import { Fragment } from "react";
import { CardPurchaseProps } from "../../types/PRODUCTS"
import { productImages } from "../../utilities/images";
import useWindowDimensions from "../../utilities/useWindowDimensions";
import './card.css'
import QtyInput from "./elements/qty";
const CardPurchase = ({product,index,addToCart,qty,setQty}:CardPurchaseProps) => {

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
    
    // let inputPrompt = 


    const descriptionPanel = (
        <Fragment>
            <div className='product__card-panel '>
                <div className='product__card-display '>
                    {product.new ? <p className='product__promo'>New Product</p> : null }
                    <h2 className='product__card-title'>{product.name}</h2>
                    <p className='product__card-description'>{product.description}</p>

                        <p className="product__card-price">${product.price}</p>

                    <div className='product__card-purchase-input'>
                        <QtyInput is_cart={false} qty={qty} qtyChangeHandler={setQty} />
                        <button onClick={() => addToCart(product.slug)}  className="button button--primary product__card-button">Add To Cart</button>
                    </div>
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

    if(view === 'desktop' && index !== undefined && index % 2 === 1){
        cardPanels = (
            <Fragment>
                {descriptionPanel}
                {imagePanel}
            </Fragment>
        )
    }

    return (
        <div className= "product__card product__item__card" >
            {cardPanels}
        </div>
    )
}

export default CardPurchase