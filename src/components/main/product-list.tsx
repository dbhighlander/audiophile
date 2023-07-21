import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const ProductList = () => {

    return (
        <div className="product__list ">
            <div className='product__type'>
                <img className='product__image' src={headphones} />
                <p className='product__title'>headphones</p>
                <a className='product__link' href='#'>Shop</a>
            </div>
            <div className='product__type'>
                <img className='product__image' src={speakers}  />
                <p className='product__title'>speakers</p>
                <a className='product__link' href='#'>Shop</a>
            </div>
            <div className='product__type'>
                <img className='product__image' src={earphones} />
                <p className='product__title'>earphones</p>
                <a className='product__link' href='#'>Shop</a>
            </div>
        </div>
    )
}

export default ProductList