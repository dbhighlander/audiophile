import React from "react";
import Products from "../../components/main/products";
import {useParams } from "react-router-dom";
import { useProduct } from "../../providers/product-provider";



const ProductsContainer = () => {
    
    const { category } = useParams();
    const {products} = useProduct()

    const filteredProducts = products.filter(product => product.category === category);
 
    return (
        <Products products={filteredProducts} />
    )
}

export default ProductsContainer