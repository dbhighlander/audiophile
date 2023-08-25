import React from 'react';

import HomeContainer from './containers/main/home-container';
import FooterContainer from './containers/footer/footer-container';
import SubFooterContainer from './containers/footer/sub-footer-container';
import HeaderContainer from './containers/header/header-container';
import ProductsContainer from './containers/main/products-container';
import ProductContainer from './containers/main/product-container';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import ScrollToTop from './utilities/scroll-to-top';
import SubHeaderContainer from './containers/header/sub-header-container';
import ShopContainer from './containers/main/shop-container';
import CheckoutContainer from './containers/main/checkout-container';
import NotFound from './components/main/not-found';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
          <Routes>
            <Route path='/' element={<ShopContainer />} />
            <Route path='products/*' element={<ShopContainer />} />           
            <Route path='checkout' element={<CheckoutContainer />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </HashRouter>
    
  );
}

export default App;
