
import { Fragment } from "react";

import './product-suggestion-card.css'
import { OtherProductProps } from '../../../types/PRODUCTS';
import { Link } from "react-router-dom";
const ProductSuggestionCard = ({otherProduct}:OtherProductProps ) => {
    return (
        <div className="product__suggestion--card">
            <div className="product__suggestion--image-container">
            <   img className="product__suggestion--image" src={'/'+otherProduct.image.desktop} />
            </div>

            <p className="product__suggestion--title">{otherProduct.name}</p>
            <Link to={otherProduct.slug} className="button button--primary button--other">See Product</Link>
        </div>
    )
}

export default ProductSuggestionCard