
import { Fragment } from "react";
// import { ProductProps } from "../../types/PRODUCTS"
// import { productImages } from "../../utilities/images";
// import useWindowDimensions from "../../utilities/useWindowDimensions";
import './qty.css'
import { Link } from "react-router-dom";
const QtyInput = () => {
    return (
        <div className='qty__container'>
            <button className='qty__button'>-</button>
            <span className='qty__amount'>0</span>
            <button className='qty__button'>+</button>
        </div>
    )
}

export default QtyInput