import React, { useContext, ReactNode, useState, useEffect } from "react";
import { BasketItem } from "../types/BASKETS";
import { getCookie } from "../utilities/cookieService";
const BasketContext = React.createContext<BasketContextValue | null>(null);

export const basketData: BasketItem[] = [];

type BasketProviderProps = {
  children: ReactNode;
};

interface BasketContextValue {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
  checkoutDetails:{};
  setCheckoutDetails:Function,
  checkoutProcess:string,
  setCheckoutProcess:Function,
  isBasketVisible:boolean,
  toggleBasketVisible:Function
}


const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {

  const [basket, setBasket] = useState(basketData)
  const [checkoutDetails,setCheckoutDetails] = useState(false)
  const [checkoutProcess,setCheckoutProcess] = useState('start')
  const [isBasketVisible,toggleBasketVisible] = useState(false)

  useEffect(() => {
    let basket = getCookie('a-bsk');

    if(typeof basket !== 'undefined'){
      basket = JSON.parse(basket);
      console.log(basket)
      setBasket(basket)
    }
    
  },[])

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useProduct hook.
  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        checkoutDetails,
        setCheckoutDetails,
        checkoutProcess,
        setCheckoutProcess,
        isBasketVisible,
        toggleBasketVisible
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// The useProduct hook can be used by any descendant of the BoardsProvider. It
// provides the Goals of the BoardsProvider's project and various functions to
// create, update, and delete the Goals in that project.
const useBasket = () => {
  const goals = useContext(BasketContext);
  if (goals == null) {
    throw new Error("useBasket() called outside of a ProductProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return goals;
};

export { BasketProvider, useBasket };
