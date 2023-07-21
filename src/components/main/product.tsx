
import zx9PromoMobImage from '../../assets/home/mobile/image-speaker-zx9.png'
import zx9PromoTabletImage from '../../assets/home/tablet/image-speaker-zx9.png'
import zx9PromoImage from '../../assets/home/desktop/image-speaker-zx9.png'
import { ProductsProps,Product } from "../../types/PRODUCTS";
import Card from "../common/card";
import ProductList from './product-list';
import { ProductPageProps } from '../../types/PRODUCTS';
import ProductFeatures from '../common/product/product-features';
import ProductContents from '../common/product/product-contents';
import ProductImages from '../common/product/product-images';
import ProductSuggestions from '../common/product/product-suggestions';
import  './product.css'
const ProductItem = ({product}:ProductPageProps) => {

    const card = <Card product={product} showPurchase={true} key={'product-0'} />

    return (
        <main className='page__container'>

            {card}
            <div className="product__card ">
                <ProductFeatures product={product}/>
                <ProductContents product={product}/> 
            </div>
            <div className="product__card">
                <ProductImages product={product} />
            </div>

            <div className="product__suggestions">
                <ProductSuggestions product={product} />
            </div>

            <ProductList />
            
        </main>

    )
}

export default ProductItem