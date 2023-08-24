import FooterContainer from '../../containers/footer/footer-container'
import HeaderContainer from '../../containers/header/header-container'
import SubHeaderContainer from '../../containers/header/sub-header-container'
import LightboxContainer from '../../containers/lightbox/lightbox-container'
import BasketCheckoutContainer from '../../containers/main/basket-checkout-container'
import RadioInput from '../common/elements/radio'
import TextInput from '../common/elements/text-input'
import  './checkout.css'
import { CheckoutProps } from '../../types/CHECKOUT'
import BackBtn from '../common/elements/back-btn'

const Checkout = (
    {
        isLightboxVisible,
        name,
        email,
        phoneNumber,
        address,
        city,
        postCode,
        country,
        paymentMethod,

        setName,
        setEmail,
        setPhoneNumber,
        setAddress,
        setCity,
        setPostCode,
        setCountry,
        setPaymentMethod,
        handleCheckout,

        errors
    }:CheckoutProps) => {

    let lightbox = null

    if(isLightboxVisible){
        lightbox = <LightboxContainer />
    }

    return (
        <div className="container checkout__container">
            <HeaderContainer />
            <SubHeaderContainer />
            {lightbox}
            <div className='page__container'>
                <BackBtn />
            </div>
            <main className='page__container page__container--checkout'>
                <div className='checkout__page__section'>
                <div className='checkout__form'>
                    <h1 className='checkout__title'>Checkout</h1>
                    <div className='checkout__section'>
                        <h3 className='checkout__section__title'>Billing Details</h3>
                        <div className='checkout__form__row'>
                            <div className='checkout__form__item'>
                                <TextInput label='Name' id='ap_checkout_name' placeholder='Joe Bloggs' value={name} onTextChange={(e) => setName(e.target.value)} errors ={errors}/>
                            </div>
                            <div className='checkout__form__item'>
                                <TextInput label='Email' id='ap_checkout_email'  placeholder='test@audiophile.com' value={email} onTextChange={(e) => setEmail(e.target.value)} errors ={errors}/>
                            </div>
                        </div>
                        <div className='checkout__form__row'>
                            <div className='checkout__form__item'>
                                <TextInput label='Phone number' id='ap_checkout_phoneNumber' placeholder='+44 94949 049490' value={phoneNumber} onTextChange={(e) => setPhoneNumber(e.target.value)} errors ={errors}/>
                            </div>
                        </div>
                    </div>
                    <div className='checkout__section'>
                        <h3 className='checkout__section__title'>Shipping Info</h3>
                        <div className='checkout__form__row '>
                            <div className='checkout__form__item checkout__form__item--full'>
                                <TextInput label='Address' id='ap_checkout_address' placeholder='11 Williams Drive' value={address} onTextChange={(e) => setAddress(e.target.value)} errors ={errors}/>
                            </div>
                        </div>
                        <div className='checkout__form__row'>
                            <div className='checkout__form__item'>
                                <TextInput label='City' id='ap_checkout_city' placeholder='Glasgow' value={city} onTextChange={(e) => setCity(e.target.value)} errors ={errors}/>
                            </div>
                            <div className='checkout__form__item'>
                                <TextInput label='Post Code' id='ap_checkout_postcode' placeholder='PA4 0LA' value={postCode} onTextChange={(e) => setPostCode(e.target.value)} errors ={errors}/>
                            </div>
                        </div>
                        <div className='checkout__form__row'>
                            <div className='checkout__form__item'>
                                <TextInput label='Country' id='ap_checkout_country' placeholder='UK' value={country} onTextChange={(e) => setCountry(e.target.value)} errors ={errors}/>
                            </div>
                        </div>
                    </div>
                    <div className='checkout__section'>
                        <h3 className='checkout__section__title'>Payment Details</h3>
                        <div className='checkout__form__row'>
                            <div className='checkout__form__item'>
                                <p className='text__input__label'>Payment Method</p>
                            </div>
                            <div className='checkout__form__item'>
                                <RadioInput value={paymentMethod} onChange={setPaymentMethod}/>
                            </div>
                        </div>
                    </div>
                    <div className='checkout__section checkout__summary__text'>
                        <img alt='' className='checkout__cash__icon' src={'./assets/checkout/icon-cash-on-delivery.svg'} />
                        <p className='checkout__prompt__text'>
                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>
                    </div>
                </div>
                <div className='checkout__summary'>
                    <BasketCheckoutContainer handleCheckout={handleCheckout}/>
                </div>
            </div>
        </main>
        <FooterContainer/>
        </div>
    

    )
}

export default Checkout