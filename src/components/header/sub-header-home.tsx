import { useLocation } from "react-router-dom";
import  './header.css'

const SubheaderHome = () => {
    
    return (
        <header className="header sub__header">
        <div className=" header__home">
            <div className="header__content">
                <h2 className="page__subtitle">New Product</h2>
                <h1 className="page__title">XX99 Mark II Headphones</h1>
                <p className="page__description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="button button--primary">See Product</button>
            </div>
        </div>
        </header>
    )
}

export default SubheaderHome