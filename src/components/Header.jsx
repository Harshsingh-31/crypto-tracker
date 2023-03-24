import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {Link} from "react-scroll"
import "./Header.css";
const Header = () => {
  return (
    <div className="header" id="header">
       <h1>Crypto Tracker</h1>
      <ul className="header-menu">
        <li><Link
             to="header"
             span={true}
             smooth={true}>Home</Link></li>
        <li><Link
             to="markett"
             span={true}>Market</Link></li>
        <li><Link
             to="joinus"
             span={true}>Join</Link></li>
      </ul>
      <span className="nav-icon">
      <FaTwitter className='twitter-icon'/>
      <FaDiscord className="twitter-icon"/>
      </span>
    </div>
  );
};
export default Header;