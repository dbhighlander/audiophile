import Basket from "../../components/header/basket";
import { useNavigate } from "react-router-dom";
import { basketData, useBasket } from "../../providers/basket-provider";
import BasketItem from "../../components/header/basket-item";
import { useProduct } from "../../providers/product-provider";
import { removeCookie } from "../../utilities/cookieService";


const BasketContainer = () => {

    const navigate = useNavigate()
    const {products} = useProduct()
    const {basket,setBasket,toggleBasketVisible} = useBasket();
    
    let total = 0;

    const processCheckout = () => {
        toggleBasketVisible(false)
        navigate('/checkout')
    }

    const handleRemoveAllFromCart = () => {
        const doDelete = window.confirm('This will empty your cart.  Do you wish to continue?');

        if(doDelete){
            removeCookie('a-bsk')
            setBasket(basketData)

        }
    }

    const basketWithProducts = basket.map((basketItem) => {

        const foundProduct = products.find(product => product.slug === basketItem.slug);

        if(foundProduct){
            return {
                qty:basketItem.qty,
                product:foundProduct
            }
        } else {
            throw new Error(`Product not found for slug: ${basketItem.slug}`);
        }
    })

    basketWithProducts.forEach((basketItem,i) => {
       total +=  basketItem.qty * basketItem.product.price
    })

    return (
        <Basket processCheckout={processCheckout} basket={basketWithProducts} total={total} handleRemoveAllFromCart={handleRemoveAllFromCart}/>
    )

}

export default BasketContainer