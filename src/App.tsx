import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Login from './components/accounts/Login';
import Register from 'components/accounts/Register';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/accounts/login' element={<Login />}></Route>
          <Route path='/accounts/signup' element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme='dark'
      />
    </div>

  );
}

export default App;
