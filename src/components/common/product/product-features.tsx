
import { Fragment } from "react";

import './product-features.css'
import { ProductProps  } from '../../../types/PRODUCTS';
const ProductFeatures = ({product}:ProductProps ) => {

    const featureText = product.features.split('\n').map((paragraph, index) => (
        <p className='product__card-description product__card-feature-description' key={index}>{paragraph}</p>
      ));

    return (

        <div className='product__card-container product__card-panel product__card-panel-info'>
            <div className='product__card-subtitle-container'>
                <h3 className='product__card-subtitle'>Features</h3>
            </div>
            {featureText}
        </div>
    )
}

export default ProductFeatures