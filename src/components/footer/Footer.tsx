import {
    CiFacebook,
    CiInstagram,
    CiYoutube,
    CiLocationOn,
  } from "react-icons/ci";
  import { FaWhatsapp } from "react-icons/fa";
  import { FiTwitter, FiPhoneCall } from "react-icons/fi";
  import { AiOutlineMail } from "react-icons/ai";
  import { LuAlarmClock } from "react-icons/lu";
  
  const Footer = () => {
    return (
      <footer id="contact" className="container grid grid-cols-1 px-5 pb-4 mx-auto lg:flex lg:justify-between sm:grid-cols-2 gap-y-10 lg:gap-y-0 lg:px-10">
        <div>
          <h1 className="text-3xl font-bold">
           You Shop
          </h1>
          <div className="flex py-5 space-x-5 text-xl cursor-pointer">
            <CiFacebook />
            <FiTwitter />
            <CiInstagram />
            <CiYoutube />
            <FaWhatsapp />
          </div>
          <ul className="space-y-6 font-medium cursor-pointer">
            <li className="flex items-center ">
              <FiPhoneCall className="mr-2 " /> (234) 903 414 4706
            </li>
            <li className="flex items-center">
              <AiOutlineMail className="mr-2 text-primary" /> you.shop@gmail.com
            </li>
            <li className="flex items-center">
              <CiLocationOn className="mr-2 text-xl text-primary" /> Lagos, Nigeria
            </li>
            <li className="flex items-center">
              <LuAlarmClock className="mr-2 text-primary" />
              10:00-18:00, Mon - Sat
            </li>
          </ul>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-medium text-secondary ">Company</h1>
          <ul className="space-y-5 text-gray-500 cursor-pointer">
            <li>About Us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-medium ">Account</h1>
          <ul className="space-y-5 text-gray-500 cursor-pointer">
            <li>Sign in</li>
            <li>View Cart</li>
            <li>My wishlist</li>
            <li>Track my Order</li>
            <li>Compare products</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-medium ">Download</h1>
          <ul className="space-y-5 text-gray-500 cursor-pointer">
            <li>From App Store or Google Play</li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;