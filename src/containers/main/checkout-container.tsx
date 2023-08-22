import React, { useState } from "react";
import Checkout from "../../components/main/checkout";
import { useLightbox } from "../../providers/lightbox-provider";

const validationRules = [
    {
        'field' : 'name',
        "is_required" : true,
        "type":"text"
    },
    {
        'field' : 'email',
        "is_required" : true,
        "type":"email"
    },
    {
        'field' : 'phone_number',
        "is_required" : true,
        "type":"phone"
    },
    {
        'field' : 'address',
        "is_required" : true,
        "type":"text"
    },
    {
        'field' : 'city',
        "is_required" : true,
        "type":"text"
    },
    {
        'field' : 'postcode',
        "is_required" : false,
        "type":"text"
    },
    {
        'field' : 'country',
        "is_required" : true,
        "type":"text"
    }
]

const CheckoutContainer = () => {

    const {isLightboxVisible} = useLightbox();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    
    

    return (
        <Checkout 
            isLightboxVisible={isLightboxVisible} 
            
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            city={city}
            postCode={postcode}
            country={country}
            paymentMethod={paymentMethod}

            setName={setName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setAddress={setAddress}
            setCity={setCity}
            setPostCode={setPostcode}
            setCountry={setCountry}
            setPaymentMethod={setPaymentMethod}


        />
    )
}

export default CheckoutContainer