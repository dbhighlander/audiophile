
import { useNavigate } from "react-router-dom";
import CheckoutComplete from "../../../components/lightbox/content/checkout-complete";
import { useBasket } from "../../../providers/basket-provider";
import { useProduct } from "../../../providers/product-provider";
import { removeCookie } from "../../../utilities/cookieService";
import { useLightbox } from "../../../providers/lightbox-provider";

const CheckoutCompleteContainer = () => {
    
    const{products} = useProduct()
    const {basket,setBasket} = useBasket()
    const {toggleLightboxVisible} = useLightbox()
    const navigate = useNavigate()

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

    let total = 0;
    basketWithProducts.forEach((basketItem,i) => {
        total +=  basketItem.qty * basketItem.product.price
     })

     const handleCheckoutComplete = () => {
        removeCookie('a-bsk')
        toggleLightboxVisible(false)
        setBasket([])
        navigate('/')
     }

    return (
        <CheckoutComplete 
          basket={basketWithProducts}
          total ={total}
          handleCheckoutComplete={handleCheckoutComplete}
        />
    )
}

export default CheckoutCompleteContainer