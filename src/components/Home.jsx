import React,{useEffect,useState} from 'react';
import "./Home.css";
import bitcoin from "../assets/bitcoin..png";
import ethereum from "../assets/ethereum.png";
const Home = () => {
  return (
    <div className='Home'>
      <div className="Home-head">
    <img src={bitcoin} alt="" className='home-img'/>
      <h1 className="Homeh1">TRACK AND TRADE</h1>
     <img src={ethereum} alt="" className='home-img'/>
      </div>
      <h1 className="Homeh2">CRYPTO <span className='sp'>CURRENCIES</span></h1>
      
    </div>
  )
}

export default Home
