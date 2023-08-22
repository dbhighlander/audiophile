import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { Link } from "react-router-dom";
import  './header.css'

import { ProductTypeProps } from "../../types/PRODUCTS";

const HeaderCategoryType = ({productType}:ProductTypeProps) => {

    let img;
    
    switch(productType){
        case 'headphones':
            img = headphones
            break;
        case 'speakers':
            img = speakers
            break;
        case 'earphones':
            img = earphones
            break;
    }

    return (
        <Link to={'/products/'+productType} className='header__navigation__link header__product__type' >
            <img className='header__product__image' src={img} />
            <p className='header__product__title'>{productType}</p>
            <p className='header__product__link' >Shop</p>
        </Link>
    )
}

export default HeaderCategoryType