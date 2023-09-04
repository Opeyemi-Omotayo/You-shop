import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHomeSmile, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Store from "../../store/Store";


const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartArray } = Store();

  return ( 
    <>
      <nav className="font-Lato">
        <div className="items-center hidden px-8 py-4 text-white bg-black lg:flex">
          <Link to='/' className="flex items-center">
            <BiHomeSmile className="w-8 h-8 text-orange-500" />
            <h1>You Shop</h1>
          </Link>
          <div className="flex flex-1 items-center px-[3rem] ">
            <input
              type="text"
              placeholder="search..."
              className="flex-1 h-5 p-4 text-black rounded-sm outline-none "
            />
            <button className="flex items-center h-5 px-3 py-4 text-white bg-orange-500">
              <BiSearchAlt2 />{" "}
            </button>
          </div>
          <div className="flex">
            <Link to="/accounts/login">
            <div className="flex items-center mx-2">
                <AiOutlineUser className="text-orange-500" />
                <span className="ml-1">Account</span>
            </div>
            </Link>
            
            <div className="mx-2">
              <Link to="/help">Help</Link>
            </div>
            <div className="flex items-center mx-2">
              <Link to="/cart" className="flex items-center">
                <span>
                  <AiOutlineShoppingCart className="text-orange-500 " />
                </span>
                <span className="relative flex items-center justify-center w-4 h-4 text-xs text-white rounded-full right-2 bg-stone-700 bottom-2">
                  {cartArray.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between p-4 bg-black lg:hidden">
          <Link to="/" className="flex items-center text-xl font-bold ">
            <BiHomeSmile className="w-8 h-8 text-orange-500" />
            <h1 className="text-white">You Shop</h1>
          </Link>
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-full ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-between text-lg h-96">
              <li>
                <a href="/#product">Products</a>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li className="flex items-center justify-center w-32 p-2 text-black bg-white rounded-full cursor-pointer">
                <Link to="/accounts/login" className="flex items-center">
                  <AiOutlineUser className="mr-2" /> Sign in
                </Link>
              </li>
              <li className="flex items-center justify-center w-32 p-2 text-white bg-black rounded-full cursor-pointer">
                <Link to="/cart" className="flex items-center">
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </Link>
              </li>
            </div>
          </ul>
          <div
            className="block text-3xl text-white lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {!nav ? <CiMenuBurger /> : <TfiClose />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
