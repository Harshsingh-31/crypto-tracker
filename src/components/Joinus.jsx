import React from 'react';
import "./Joinus.css";
import bitcoin from "../assets/bitcoin..png";
import ethereum from "../assets/ethereum.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Whyus() {
  return (
    <div className='Whyus' id='joinus'>
      <div className="Join-head">
    <img src={bitcoin} alt="" className='home-img'/>
      <h1 className="Homeh1">JOIN US VIA</h1>
    <img src={ethereum} alt="" className='home-img'/>
      </div>
      <h1 className="whyh11">DISCORD</h1>
      <div className="joincon">
      <h2 >Invest and manage all your crypto at one place.</h2>
      <a className='joinus-a'>Join via Discord</a>
      </div>
      <div className="footer">
        <div className="handles">
      <FaTwitter className='twitterr-icon'/>
      <FaDiscord className="twitterr-icon"/>
      <FaYoutube className='twitterr-icon'/>
      <FaFacebook className="twitterr-icon"/>
        </div>
        <div className="endd">
        <a className='end'>Privacy</a>
        <a className='end'>Terms of Use</a>
        </div>

      </div>
    </div>
  )
}

export default Whyus
