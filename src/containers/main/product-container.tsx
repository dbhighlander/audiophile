import React from "react";
import Products from "../../components/main/products";
import {useParams } from "react-router-dom";
import Product from "../../components/main/product";
import { useProduct } from "../../providers/product-provider";



const ProductContainer = () => {
    
    const {products} = useProduct();
    const { slug } = useParams();
    const product = products.filter(product => product.slug === slug)[0];
    
    return (
        <Product product={product}/>
    )
}

export default ProductContainer