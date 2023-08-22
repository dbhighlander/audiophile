import './product-contents.css'
import { ProductProps } from "../../../types/PRODUCTS";

const ProductContents = ({product}:ProductProps ) => {
    const contentList = product.includes.map((item,i) => {
        return (
            <li className='product__content-list-item'key={'contents'+i}>
                <span className='product__content-qty'>{item.quantity}x</span>
                <span className='product__content-name'>{item.item}</span>
            </li>
        )
    })
    return (
        <div className='product__card-container product__card-panel product__card-panel-info'>
            <div className='product__card-contents '>
                <h3 className='product__card-subtitle'>In the box</h3>
                <ul className='product__content-list'>
                    {contentList}
                </ul>
            </div>
        </div>
    )
}

export default ProductContents