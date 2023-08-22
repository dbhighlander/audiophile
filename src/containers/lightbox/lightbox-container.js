import React, { useEffect, useRef } from "react";

// import { useBoards } from "../../app/providers/board-provider";
// import { useLightbox } from "../../app/providers/lightbox-provider";
import Lightbox from '../../components/lightbox/lightbox.js'
import { useLightbox } from "../../providers/lightbox-provider.tsx";

const LightboxContainer = (props) => {

  const {toggleLightboxVisible} = useLightbox();

  const content = '';

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              toggleLightboxVisible(false)
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