
import zx9PromoMobImage from '../../assets/home/mobile/image-speaker-zx9.png'
import zx9PromoTabletImage from '../../assets/home/tablet/image-speaker-zx9.png'
import zx9PromoImage from '../../assets/home/desktop/image-speaker-zx9.png'
import { ProductsProps,Product } from "../../types/PRODUCTS";
import Card from "../common/card";
import ProductList from './product-list';

const Products = ({products}:ProductsProps) => {

    const productHtml = products.map((product:Product,i:number) => {
        return <Card product={product} index={i} key={'product-'+i} />
    })

    return (
        <main className='page__container'>
            {productHtml}
            <ProductList />
        </main>

    )
}

export default Products