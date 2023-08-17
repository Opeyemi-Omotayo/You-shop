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
        <div className="lg:flex hidden bg-black py-4 px-8 text-white items-center">
          <Link to='/' className="flex items-center">
            <BiHomeSmile className="text-orange-500 w-8 h-8" />
            <h1>You Shop</h1>
          </Link>
          <div className="flex flex-1 items-center px-[3rem] ">
            <input
              type="text"
              placeholder="search..."
              className="flex-1 rounded-sm outline-none h-5 p-4 text-black "
            />
            <button className="bg-orange-500 text-white h-5 py-4 px-3 flex items-center">
              <BiSearchAlt2 />{" "}
            </button>
          </div>
          <div className="flex">
            <Link to="/accounts/login">
            <div className="flex items-center mx-2">
                <AiOutlineUser className="text-orange-500" />
                <span>Sign in</span>
            </div>
            </Link>
            
            <div className="mx-2">
              <Link to="/help">Help</Link>
            </div>
            <div className="flex items-center  mx-2">
              <Link to="/cart" className="flex items-center">
                <span>
                  <AiOutlineShoppingCart className="text-orange-500 " />
                </span>
                <span className="relative right-2 bg-stone-700 bottom-2 h-4 w-4 text-white flex items-center justify-center text-xs rounded-full">
                  {cartArray.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-black">
          <Link to="/" className="flex items-center text-xl font-bold ">
            <BiHomeSmile className="text-orange-500 w-8 h-8" />
            <h1 className="text-white">You Shop</h1>
          </Link>
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-full ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col h-96 text-lg  items-center justify-between">
              <li>
                <a href="/#product">Products</a>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full">
                <Link to="/accounts/login" className="flex items-center">
                  <AiOutlineUser className="mr-2" /> Sign in
                </Link>
              </li>
              <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
                <Link to="/cart" className="flex items-center">
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </Link>
              </li>
            </div>
          </ul>
          <div
            className="lg:hidden block text-3xl text-white"
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
