import React from "react";
import Logo from "../assets/logo.png";
import "./Header.css";
import {Link} from "react-scroll"
const Header = () => {
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li><Link
             to="Header"
             span={true}
             smooth={true}>Home</Link></li>
        <li><Link
             to="booking"
             span={true}
             smooth={true}>Booking</Link></li>
        <li><Link
             to="checkout"
             span={true}
             smooth={true}>Vehical Models</Link></li>
        <li><Link
             to="working"
             span={true}
             smooth={true}>About</Link></li>
        <li><Link
             to="contact"
             span={true}
             smooth={true}>Contact</Link></li>
      </ul>
      <button className="sign-in">Sign In</button>
      <button className="register">Register</button>
    </div>
  );
};
export default Header;