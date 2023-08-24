
import ProductList from './product-list';
import { ProductPageProps } from '../../types/PRODUCTS';
import ProductFeatures from '../common/product/product-features';
import ProductContents from '../common/product/product-contents';
import ProductImages from '../common/product/product-images';
import ProductSuggestions from '../common/product/product-suggestions';
import  './product.css'
import BackBtn from "../common/elements/back-btn";
import CardPurchase from "../common/card-purchase";

const ProductItem = ({product,addToCart,qty,setQty}:ProductPageProps) => {

    const card = <CardPurchase
                    product={product} 
                    addToCart={addToCart} 
                    key={'product-'+product.slug} 
                    qty={qty}
                    setQty={setQty}
                    />    
    
    return (
        <main className='page__container'>
            <BackBtn />
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