import  { useEffect, useRef } from "react";
import Lightbox from '../../components/lightbox/lightbox.js'
import { useLightbox } from "../../providers/lightbox-provider.tsx";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../utilities/cookieService.js";
import { useBasket } from "../../providers/basket-provider.tsx";

const LightboxContainer = () => {

  const {toggleLightboxVisible} = useLightbox();

  const content = '';
  const navigate = useNavigate()
  const {setBasket} =useBasket()

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              removeCookie('a-bsk')
              setBasket([])
              toggleLightboxVisible(false)
              navigate('/')
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

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <Lightbox lightbox={content} wrapperRef={wrapperRef} />
    )
}



export default LightboxContainer