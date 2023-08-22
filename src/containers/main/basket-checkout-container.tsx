import BasketCheckout from "../../components/main/basket-checkout";
import { useLightbox } from "../../providers/lightbox-provider";

const BasketCheckoutContainer = () => {
    const {toggleLightboxVisible} = useLightbox();

    const handleCheckout = () => {
        window.alert('Api call to process order');
        toggleLightboxVisible(true)
    }

    return (
        <BasketCheckout handleCheckout={handleCheckout}/>
    )

}

export default BasketCheckoutContainer