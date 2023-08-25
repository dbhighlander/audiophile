import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import ScrollToTop from './utilities/scroll-to-top';
import ShopContainer from './containers/main/shop-container';
import CheckoutContainer from './containers/main/checkout-container';
import NotFound from './components/main/not-found';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
          <Routes>
            
            <Route path='products/*' element={<ShopContainer />} />           
            <Route path='checkout' element={<CheckoutContainer />} />
            <Route path='/' element={<ShopContainer />} />
            <Route path='/*' element={<NotFound />}/>
          </Routes>
      </HashRouter>
    
  );
}

export default App;
