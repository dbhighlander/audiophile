import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";

export type HeaderProps = {
    isNavigationVisible: boolean,
    toggleNavigationVisible:Function,
    isBasketVisible: boolean,
    toggleBasketVisible:Function,
    wrapperRef: React.RefObject<HTMLInputElement>
}


const HeaderContainer = () => {
    const [isNavigationVisible,toggleNavigationVisible] = useState(false)
    const [isBasketVisible,toggleBasketVisible] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          const handleClickOutside = (event :  MouseEvent ) => {

            let node = event.target as Element

            if (ref.current && !ref.current.contains(event.target as Node) && node.className.indexOf('hamburger') === -1 )  {
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

    return (
        <Header 
            isNavigationVisible={isNavigationVisible}
            toggleNavigationVisible={toggleNavigationVisible}
            isBasketVisible={isBasketVisible}
            toggleBasketVisible={toggleBasketVisible}
            wrapperRef={wrapperRef}
        />
    )
}

export default HeaderContainer