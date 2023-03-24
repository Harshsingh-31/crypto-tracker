import React from 'react'
import "./About.css"
import selectcar from "../assets/selectcar.png";
import contactoperator from "../assets/contactoperator.png";
import drive from "../assets/drive.png";

function About() {
  return (
    <div className='about' id='working'>
      <h2>Plan your trip now</h2>
      <h1 className='h11'>Quick & easy car rental</h1>
      <div className="about-c">
        <div className="about-content">
            <img className='imggg' src={selectcar} alt="" />
             <h3 className="h33">Select Car</h3>
             <p className='pp'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div> 
      <div className="about-content">
            <img className='imggg' src={contactoperator} alt="" />
             <h3 className="h33">Contact Operator</h3>
             <p className='pp'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className="about-content">
            <img className='imggg' src={drive} alt="" />
             <h3 className="h33">Let's Drive</h3>
             <p className='pp'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
    </div>
    </ div>
  )
}

export default About
