import React, { useEffect } from "react";
import Products from "../../components/main/products";
import {useParams } from "react-router-dom";
import { useProduct } from "../../providers/product-provider";
import { useBasket } from "../../providers/basket-provider";



const ProductsContainer = () => {
    
    const { category } = useParams();
    const {products} = useProduct()
    const {toggleBasketVisible} = useBasket()
    const filteredProducts = products.filter(product => product.category === category);

    useEffect(() => {
        toggleBasketVisible(false);
      }, [category]);
 
    return (
        <Products products={filteredProducts} />
    )
}

export default ProductsContainer