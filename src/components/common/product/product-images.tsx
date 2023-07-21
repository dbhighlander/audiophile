import { Fragment,useState,useEffect } from "react";

import './product-images.css'
import { ProductProps } from "../../../types/PRODUCTS";
import imageSrc from '../../.././assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
const ProductImages = ({product}:ProductProps ) => {


    return <div className='product__images-container'>
        <div className='product__images-left-container'>
            <div className="product__image-left">
                <img  className="product__image-left-photo" src={'/'+product.gallery.first.desktop} />
            </div>
            <div className="product__image-left">
                <img className="product__image-left-photo" src={'/'+product.gallery.second.desktop} />
            </div>
        </div>
        <div className='product__images-main-container'>
            <img  className="product__image-main-photo" src={'/'+product.gallery.third.desktop} />
        </div>
    </div>
}

export default ProductImages