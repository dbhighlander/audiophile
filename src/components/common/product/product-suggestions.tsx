
import { Fragment } from "react";

import './product-suggestions.css'
import { ProductProps  } from '../../../types/PRODUCTS';
import ProductSuggestionCard from "./product-suggestion-card";
const ProductSuggestions = ({product}:ProductProps ) => {
    return (
        <Fragment>
            <h3 className='product__card-subtitle product__suggestion-subtitle'>You might also like</h3>
            <div className='product__suggestion--container'>
                {product.others.map((product,i) => {
                    return <ProductSuggestionCard otherProduct={product} key={'product-suggestions-'+i}/>
                })}
            </div>
        </Fragment>
    )
}

export default ProductSuggestions