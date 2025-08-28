
import { Link } from 'react-router-dom'
import zx9PromoImage from '../../assets/home/mobile/image-speaker-zx9.png'
import ProductList from './product-list'

const Home = () => {
    return (
        <main className='page__container'>
            <ProductList />
            <div className="home__display">
                <div className="promo home-zx9__promo">
                    <div className="home-zx9__container">
                        <img className="home-zx9__speaker__image" src={zx9PromoImage} alt="home-zx9 speaker"/>
                        <div className="home-zx9-promo__container">
                            <h2 className="promo__title">zx9<br/>Speaker</h2>
                            <p className="home-zx9__description">Upgrade to premium speakers that are phenomenal and built to display truly amazing sound</p>
                            <Link  to='/products/speakers/zx9-speaker' className="button button--secondary">See Product</Link>
                        </div>
                    </div>
                </div>
                <div className="promo home-zx7__promo">
                    <div className="home-zx7__container">
                        <h2 className="promo__title promo__title--dark">ZX7 Speaker</h2>
                        <Link  to='/products/speakers/zx7-speaker' className="button button--secondary">See Product</Link>
                    </div>
                </div>
                <div className='headphone__container'>
                    <div className="promo headphone__promo">
                    
                    </div>
                    <div className="promo yx1__promo">
                        <div className="home-yx1__container">
                            <h2 className="promo__title promo__title--dark">YX1 Earphones</h2>
                            <Link  to='/products/earphones/yx1-earphones' className="button button--secondary">See Product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home