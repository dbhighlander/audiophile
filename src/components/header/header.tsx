import React, { Fragment } from "react";
import hamburgerLogo from '../../assets/shared/tablet/icon-hamburger.svg';
import headerLogo from '../../assets/shared/desktop/logo.svg';
import headerCartLogo from '../../assets/shared/desktop/icon-cart.svg';
import { HeaderProps } from "../../containers/header/header-container";
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import SubHeaderContainer from "../../containers/header/sub-header-container";
import { Link } from "react-router-dom";
import  './header.css'
import BasketContainer from "../../containers/header/basket-container";

const Header = ({isNavigationVisible,toggleNavigationVisible,isBasketVisible,toggleBasketVisible,wrapperRef}:HeaderProps) => {

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

    return (
        <Fragment>
            {basketBg }
            { navigationBg}
            <header className="header">
                
                <div className="header__top ">
                    <a className="header__link hamburger__link" onClick={(e) => toggleNavigationVisible(!isNavigationVisible)}><img className="hamburger__logo" alt="header__hamburger" src={hamburgerLogo}/></a>
                    <a className="header__link home__link"><img className="site__logo" alt="header__logo" src={headerLogo}/></a>
                    <nav className={navigationClass}>
                        <Link to='/' className='header__navigation__link home__navigation__link' >
                            <p className='header__product__title'>Home</p>
                        </Link>
                        <Link to='/products/headphones' className='header__navigation__link header__product__type' >
                            <img className='header__product__image' src={headphones} />
                            <p className='header__product__title'>headphones</p>
                            <p className='header__product__link' >Shop</p>
                        </Link>
                        <Link to='/products/speakers' className='header__navigation__link header__product__type' >
                            <img className='header__product__image' src={speakers}  />
                            <p className='header__product__title'>speakers</p>
                            <p className='header__product__link'>Shop</p>
                        </Link>
                        <Link to='/products/earphones' className='header__navigation__link header__product__type' >
                            <img className='header__product__image' src={earphones} />
                            <p className='header__product__title'>earphones</p>
                            <p className='header__product__link'>Shop</p>
                        </Link>
                    </nav>
                    
                    <a className="header__link" onClick={(e) => toggleBasketVisible(!isBasketVisible)}><img className="cart__logo"/><img alt="cart__icon" className="header__logo" src={headerCartLogo}/></a>
                    {isBasketVisible && <BasketContainer/>}
                </div>
                   
            </header>
        </Fragment>

    )
}

export default Header