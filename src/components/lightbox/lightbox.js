
import CheckoutCompleteContainer from "../../containers/lightbox/content/checkout-complete-container";
import './lightbox.css'
const Lightbox = (props) => {

    let lightboxContent = null;
  
    switch(props.lightbox){
      default:
        lightboxContent =<CheckoutCompleteContainer />
        break;
    }


    return (
        <div className="lightbox" >
            <div className="lightbox__container" ref={props.wrapperRef}>
                {lightboxContent}
            </div>
        </div>
    )
}

export default Lightbox