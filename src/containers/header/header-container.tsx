import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";
import { useBasket } from "../../providers/basket-provider";
import { useLocation, useParams } from "react-router-dom";

export type HeaderProps = {
    isNavigationVisible: boolean,
    toggleNavigationVisible:Function,
    isBasketVisible: boolean,
    toggleBasketVisible:Function,
    wrapperRef: React.RefObject<HTMLInputElement>
    basketWrapperRef: React.RefObject<HTMLButtonElement>
    showLinks:boolean
}


const HeaderContainer = () => {
    const [isNavigationVisible,toggleNavigationVisible] = useState(false)
    const {isBasketVisible,toggleBasketVisible} = useBasket();
    const wrapperRef = useRef(null);
    const basketWrapperRef = useRef(null);

    const {pathname} = useLocation();

    let showLinks = true;

    if(pathname == '/checkout'){
      showLinks = false;
    }

    useOutsideAlerter(wrapperRef);
    useOutsideBasketAlerter(basketWrapperRef)
    
    function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          const handleClickOutside = (event :  MouseEvent ) => {

            let node = event.target as Element

            if (ref.current && !ref.current.contains(event.target as Node) && node.className.indexOf('header__navigation__container') === -1 )  {
                toggleNavigationVisible(false)
            }

          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

      function useOutsideBasketAlerter(ref: React.RefObject<HTMLAnchorElement>) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          const handleBasketClickOutside = (event :  MouseEvent ) => {

            let node = event.target as Element

            if (ref.current && (node.className.indexOf('basket__background') !== -1)  )  {
              
              toggleBasketVisible(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleBasketClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleBasketClickOutside);
          };
        }, [ref]);
      }

    return (
        <Header 
            isNavigationVisible={isNavigationVisible}
            toggleNavigationVisible={toggleNavigationVisible}
            isBasketVisible={isBasketVisible}
            toggleBasketVisible={toggleBasketVisible}
            wrapperRef={wrapperRef}
            basketWrapperRef={basketWrapperRef}
            showLinks={showLinks}
        />
    )
}

export default HeaderContainer