import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import ProductType from './product-type';

const ProductList = () => {

    const productTypes = [
        'headphones',
        'speakers',
        'earphones'
    ];

    return (
        <div className="product__list ">
            {productTypes.map((productType,i) => (
                <ProductType productType={productType} key={'product_type_'+i} />
            ))}
        </div>
    )
}

export default ProductList