import React from 'react';

import HomeContainer from './containers/main/home-container';
import FooterContainer from './containers/footer/footer-container';
import SubFooterContainer from './containers/footer/sub-footer-container';
import HeaderContainer from './containers/header/header-container';
import ProductsContainer from './containers/main/products-container';
import ProductContainer from './containers/main/product-container';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ScrollToTop from './utilities/scroll-to-top';
import SubHeaderContainer from './containers/header/sub-header-container';
import ShopContainer from './containers/main/shop-container';
import CheckoutContainer from './containers/main/checkout-container';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <ScrollToTop />
          <Routes>
            <Route path='/' element={<ShopContainer />} />
            <Route path='products/*' element={<ShopContainer />} />           
            <Route path='checkout' element={<CheckoutContainer />} />
          </Routes>
      </BrowserRouter>
    
  );
}

export default App;
