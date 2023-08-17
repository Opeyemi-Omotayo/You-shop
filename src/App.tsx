import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Login from './components/accounts/Login';

function App() {
  return (
    <Router>
       <Header />
         <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/cart' element={<Cart />}></Route>
           <Route path='/accounts/login' element={<Login />}></Route>
         </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;
