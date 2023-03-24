import React from 'react'
import "./Home.css"
import Homebg from "../assets/Homebg.png";
import maincar from "../assets/maincar.png";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div className='Home'>
    <div className="left-h">
    <div className="home-text">
      <h4>Plan your trip now</h4>
      <h1>Save <span>big</span> with our</h1>
      <h1>car rental</h1>
      <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, 
        flexible pick-up options and much more.</p>
      <div className="home-btn">
        <a href="" className="btn_book-ride"><Link
             to="booking"
             span={true}
             smooth={true}>Book Ride</Link></a>
        <a href="" className="btn-learnmore"><Link
             to="about"
             span={true}
             smooth={true}>Learn More</Link></a>
      </div>
    </div>
    </div>
    <div className="right-h">
       <img className='bgimg' src={Homebg} alt="" />
       <img src={maincar} alt="" className="maincar" />
    </div>
    </div>
  )
}

export default Home
