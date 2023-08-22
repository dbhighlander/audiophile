import Basket from "../../components/header/basket";
import { useNavigate } from "react-router-dom";


const BasketContainer = () => {

    const navigate = useNavigate()

    const processCheckout = () => {
        navigate('/checkout')
    }

    return (
        <Basket processCheckout={processCheckout}/>
    )

}

export default BasketContainer