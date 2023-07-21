import React, { Fragment } from "react";
import siteLogo from '../../assets/shared/desktop/logo.svg'
import facebookLogo from '../../assets/shared/desktop/icon-facebook.svg'
import instagramLogo from '../../assets/shared/desktop/icon-instagram.svg'
import twitterLogo from '../../assets/shared/desktop/icon-twitter.svg'
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
    return (
        <Fragment>
                <div className='footer'>
                    <div className='footer__container'>
                        <div className="footer__bar--orange"></div>
                        <div className="footer__navigation__container">
                            <img className="footer__logo" alt='footer__logo' src={siteLogo}/>
                            <nav className="footer__navigation">
                                <Link to='/' className='footer__link' >Home</Link>
                                <Link to='/products/headphones' className='footer__link' >Headphones</Link>
                                <Link to='/products/speakers' className='footer__link' >Speakers</Link>
                                <Link to='/products/earphones' className='footer__link' >Earphones</Link>
                            </nav>
                        </div>
                        <p className="footer__description">
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                        <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
                        <div className="social-media">
                            <div className="social-media__group">
                                <a className="social-media__link" href='/'>
                                    <img className='social-media__icon' alt='facebook icon' src={facebookLogo}/>
                                </a>
                                <a className="social-media__link" href='/'>
                                    <img className='social-media__icon' alt='twitter icon'  src={twitterLogo}/>
                                </a>
                                <a className="social-media__link" href='/'>
                                    <img className='social-media__icon' alt='instagram icon' src={instagramLogo}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

    )
}

export default Footer