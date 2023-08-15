import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
       <Header />
         <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/cart' element={<Cart />}></Route>
         </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;
