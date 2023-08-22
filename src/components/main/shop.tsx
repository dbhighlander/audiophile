import HeaderContainer from "../../containers/header/header-container"
import SubHeaderContainer from "../../containers/header/sub-header-container"
import SubFooterContainer from "../../containers/footer/sub-footer-container"
import FooterContainer from "../../containers/footer/footer-container";
import {
    Routes,
    Route,
  } from "react-router-dom";
  import HomeContainer from "../../containers/main/home-container";
  import ProductContainer from "../../containers/main/product-container";
  import ProductsContainer from "../../containers/main/products-container";
const Shop = () => {

    return (
      <div className="container">
        <HeaderContainer />
        <SubHeaderContainer />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path=':category/:slug' element={<ProductContainer />} />
          <Route path=':category' element={<ProductsContainer />} />
        </Routes>
        <SubFooterContainer />
        <FooterContainer />
      </div> 
    )
}

export default Shop