import React, { Fragment } from "react";
import manListening from '../../assets/shared/mobile/image-best-gear.jpg'
import './subfooter.css'
const SubFooter = () => {
    return (
        <Fragment>
            <div className="page__container">
                <div className='subfooter'>
                    <div className=' subfooter__panel subfooter__panel--image'>
                        <img className="subfooter__image" alt='man listening' src={manListening}/>
                        
                    </div>
                    
                    <div className='subfooter__panel subfooter__panel--desc'>
                        <p className='subfooter__title'>Bringing you the <span className='subfooter__title--highlight'>best</span> audio gear</p>
                        <p className='subfooter__promo'>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. Stop by our store 
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                        audio equipment.
                        </p>
                    </div>
                </div>
            </div>
            </Fragment>

    )
}

export default SubFooter