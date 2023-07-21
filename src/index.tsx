import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css'
import './css/colors.css'
import './css/structure.css'

import './css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './providers/product-provider';
import { BasketProvider } from './providers/basket-provider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <BasketProvider>
      <App />
      </BasketProvider>
    </ProductProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
