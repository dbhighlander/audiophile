import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { ProductTypeProps } from '../../types/PRODUCTS';
import { Link } from 'react-router-dom';

const ProductType = ({productType}:ProductTypeProps) => {

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

            <Link className='product__type' to={'/products/'+productType}>
                <img className='product__image' src={img} />
                <p className='product__title'>{productType}</p>
                <span className='product__link'>Shop</span>
            </Link>
        
        )
    }

    export default ProductType