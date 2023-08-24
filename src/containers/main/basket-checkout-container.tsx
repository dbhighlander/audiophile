import BasketCheckout from "../../components/main/basket-checkout";
import { useBasket } from "../../providers/basket-provider";
import { useProduct } from "../../providers/product-provider";
import { BasketCheckoutContainerProps } from "../../types/CHECKOUT";

const BasketCheckoutContainer = ({handleCheckout}:BasketCheckoutContainerProps) => {

    const {basket} = useBasket()
    const {products} = useProduct()

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

    // basketWithProducts.forEach((basketItem,i) => {
    //    total +=  basketItem.qty * basketItem.product.price
    // })

    return (
        <BasketCheckout handleCheckout={handleCheckout} basket={basketWithProducts}/>
    )

}

export default BasketCheckoutContainer