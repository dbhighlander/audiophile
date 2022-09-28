import React from "react";
import hamburgerLogo from '../../assets/shared/tablet/icon-hamburger.svg';
import headerLogo from '../../assets/shared/desktop/logo.svg';
import headerCartLogo from '../../assets/shared/desktop/icon-cart.svg';
const Header = () => {
    return (
        <header className="header">
            <a className="header__link"><img className="hamburger__logo" alt="header__hamburger" src={hamburgerLogo}/></a>
            <a className="header__link"><img className="site__logo" alt="header__logo" src={headerLogo}/></a>
            <a className="header__link"><img className="cart__logo"/><img alt="cart__icon" className="header__logo" src={headerCartLogo}/></a>
        </header>
    )
}

export default Header