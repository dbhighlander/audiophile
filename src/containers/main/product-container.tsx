import React, { useState } from "react";
import Products from "../../components/main/products";
import {useParams } from "react-router-dom";
import Product from "../../components/main/product";
import { useProduct } from "../../providers/product-provider";
import { useBasket } from "../../providers/basket-provider";
import { setCookie } from "../../utilities/cookieService";



const ProductContainer = () => {
    
    const {products} = useProduct();
    const { slug } = useParams();
    const product = products.filter(product => product.slug === slug)[0];
    const {basket,setBasket,toggleBasketVisible} =useBasket();

    const [qty,setQty] = useState(0);

    const addToCart =(slug:string) => {

        let itemInBasket = false;
        let newBasket = basket.map((basketItem) => {
            if(basketItem.slug === slug){
                itemInBasket = true;
                basketItem.qty += qty
            }
            return basketItem
        });

        if(!itemInBasket){
            newBasket.push({
                slug:slug,
                qty:qty
            })
        }

        setBasket(newBasket)
        setCookie('a-bsk',JSON.stringify(newBasket))
        toggleBasketVisible(true);

        setTimeout(() => {
            setQty(0)
        },1000)
    }
    
    return (
        <Product 
            product={product} 
            addToCart={addToCart}
            qty={qty}
            setQty={setQty}
            
            />
    )
}

export default ProductContainer