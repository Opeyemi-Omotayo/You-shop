import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHomeSmile, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="font-Lato">
        <div className="lg:flex hidden bg-black p-4 text-white items-center">
          <div className="flex items-center">
            <BiHomeSmile className="text-orange-500 w-8 h-8" />
            <h1>You Shop</h1>
          </div>
          <div className="flex flex-1 items-center px-5 ">
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
            <div className="flex items-center mx-2">
              <AiOutlineUser className="text-orange-500" />
              <span>Sign in</span>
            </div>
            <div className="mx-2">
              <span>Help</span>
            </div>
            <div className="flex items-center bg-stone-800 rounded-md mx-2">
              <span>
                <AiOutlineShoppingCart className="text-orange-500 mx-2" />
              </span>
              <span className="mr-2">0</span>
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
                <a href="/#help">Help</a>
              </li>
              <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full">
                <a href="/#accounts" className="flex items-center">
                  <AiOutlineUser className="mr-2" /> Sign in
                </a>
              </li>
              <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
                <a href="/cart" className="flex items-center">
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </a>
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
