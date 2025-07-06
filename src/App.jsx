import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import Welcome from './Welcome';
import Navbar from './Navbar'; 
import './App.css';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </>
  );
}

export default App;
