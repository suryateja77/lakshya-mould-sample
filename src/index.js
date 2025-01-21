import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Company from './pages/Company';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="App-header">
        <nav className='App-nav'>
          <Link className='App-link' to="/home">Home</Link>
          <Link className='App-link' to="/company">Company</Link>
          <Link className='App-link' to="/products">Products</Link>
          <Link className='App-link' to="/product-detail">Product Detail</Link>
          <Link className='App-link' to="/download">Download</Link>
          <Link className='App-link' to="/contact">Contact</Link>
        </nav>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/company" element={<Company />} />
        <Route path="/download" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<App />} />
      </Routes>
      </header>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
