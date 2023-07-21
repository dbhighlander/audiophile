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

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="container">
        <HeaderContainer />
        <SubHeaderContainer />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='products/:category' element={<ProductsContainer />} />
            <Route path='products/:category/:slug' element={<ProductContainer />} />
          </Routes>
          <SubFooterContainer />
        <FooterContainer />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
