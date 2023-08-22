import React, { Fragment } from "react";
import hamburgerLogo from '../../assets/shared/tablet/icon-hamburger.svg';
import headerLogo from '../../assets/shared/desktop/logo.svg';
import headerCartLogo from '../../assets/shared/desktop/icon-cart.svg';
import { HeaderProps } from "../../containers/header/header-container";
import { Link } from "react-router-dom";
import  './header.css'
import BasketContainer from "../../containers/header/basket-container";
import HeaderCategoryType from "./header-category-type";

const Header = ({isNavigationVisible,toggleNavigationVisible,isBasketVisible,toggleBasketVisible,wrapperRef,basketWrapperRef}:HeaderProps) => {

    let navigationClass= 'header__navigation__container';
    let navigationBg = null;
    let basketBg = null;

    if(isNavigationVisible){
        navigationClass += ' header__navigation__container--visible'
        navigationBg = <div className='navigation__background'></div>
    }

    if(isBasketVisible){
        basketBg = <div className='basket__background'></div>
    }

    const headerCategories = [
        'headphones',
        'speakers',
        'earphones'
    ];

    return (
        <Fragment>
            {basketBg }
            { navigationBg}
            <header className="header" ref={wrapperRef}>
                
                <div className="header__top ">
                    <button className="header__link hamburger__link" onClick={(e) => toggleNavigationVisible(!isNavigationVisible)}>
                        <img className="hamburger__logo" alt="header__hamburger" src={hamburgerLogo}/>
                    </button>
                    <Link  className="header__link home__link" to='/'>
                        <img className="site__logo" alt="header__logo" src={headerLogo}/>
                    </Link>
                    <nav className={navigationClass}>
                        <Link to='/' className='header__navigation__link home__navigation__link' >
                            <p className='header__product__title'>Home</p>
                        </Link>
                        {headerCategories.map((category,i) => (
                            <HeaderCategoryType productType={category} key={'product-header_category_'+i} />
                        ))}
                    </nav>
                    
                    <button ref={basketWrapperRef} className="header__link home__checkout__link" onClick={(e) => toggleBasketVisible(!isBasketVisible)}>
                        <img alt="cart__icon" className="header__logo" src={headerCartLogo}/>
                    </button>
                    {isBasketVisible && <BasketContainer/>}
                </div>
                   
            </header>
        </Fragment>

    )
}

export default Header