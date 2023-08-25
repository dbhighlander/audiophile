import React, { useEffect, useState } from "react";
import Checkout from "../../components/main/checkout";
import { useLightbox } from "../../providers/lightbox-provider";
import { useBasket } from "../../providers/basket-provider";
import { useNavigate } from "react-router-dom";


type ValidationRule = {
    is_required: boolean;
    type: string; // You might want to create an enum for better type safety
};

type ValidationRulesMap = {
    [key: string]: ValidationRule;
};

const validationRulesMap:ValidationRulesMap = {
    'name': {
        "is_required": true,
        "type": "text"
    },
    'email': {
        "is_required": true,
        "type": "email"
    },
    'phoneNumber': {
        "is_required": true,
        "type": "phone"
    },
    'address': {
        "is_required": true,
        "type": "text"
    },
    'city': {
        "is_required": true,
        "type": "text"
    },
    'postcode': {
        "is_required": false,
        "type": "text"
    },
    'country': {
        "is_required": true,
        "type": "text"
    }
};

const CheckoutContainer = () => {

    const {isLightboxVisible,toggleLightboxVisible} = useLightbox();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [errors,setError] = useState({})

    const {basket,hasBasketLoaded} = useBasket() 
    const navigate = useNavigate()

    const handleCheckout = () => {

        const inputsToCheck = ['name', 'email', 'phoneNumber', 'address', 'city', 'postcode', 'country'];

        const newErrors: Record<string, string> = {};
  
        inputsToCheck.forEach(input => {
            const rule = validationRulesMap[input];
    
            if (rule) {
                let inputValue = '';
        
                // Access the state variables directly
                switch (input) {
                    case 'name':
                        inputValue = name;
                        break;
                    case 'email':
                        inputValue = email;
                        break;
                    case 'phoneNumber':
                        inputValue = phoneNumber;
                        break;
                    case 'address':
                        inputValue = address;
                        break;
                    case 'city':
                        inputValue = city;
                        break;
                    case 'postcode':
                        inputValue = postcode;
                        break;
                    case 'country':
                        inputValue = country;
                        break;
                    default:
                        break;
                }
        
                if (rule.is_required && !inputValue) {
                    newErrors['ap_checkout_'+input] = `${convertToTitleCase(input)} is required`;
                } else if (rule.type === "email" && !isValidEmail(inputValue)) {
                    newErrors['ap_checkout_'+input] = `Wrong Format`;
                } else if (rule.type === "phone" && !isValidPhone(inputValue)) {
                    newErrors['ap_checkout_'+input] = `Invalid phone number`;
                }
            }
        });
    
        setError(newErrors);

        

        const hasErrors = Object.keys(newErrors).length > 0;

        if (hasErrors) {
            setError(newErrors);
            // Handle the case where there are validation errors
        } else {
            setError({});
            window.alert('Api call to process order');
            toggleLightboxVisible(true)
        }
        
    }

    const isValidEmail = (email: string): boolean => {
        // Basic email validation using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };
    
    const isValidPhone = (phone: string): boolean => {
        // Basic phone number validation (digits only)
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
    };


    const convertToTitleCase =(input:string) => {
        return input
            .replace(/([A-Z])/g, ' $1')  // Add space before capitals
            .replace(/^./, str => str.toUpperCase())  // Capitalize the first letter
            .trim();  // Remove leading space
    }

    useEffect(() => {
        if(hasBasketLoaded && basket.length === 0){
            navigate('/')
        }
    },[basket,hasBasketLoaded,navigate])

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

            errors={errors}

            setName={setName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setAddress={setAddress}
            setCity={setCity}
            setPostCode={setPostcode}
            setCountry={setCountry}
            setPaymentMethod={setPaymentMethod}
            handleCheckout={handleCheckout}

        />
    )
}

export default CheckoutContainer