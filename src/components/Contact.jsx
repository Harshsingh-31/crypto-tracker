import React from 'react';
import "./Contact.css";
import receiver from "../assets/receiver.png";
import mail from "../assets/mail.png";
import locationn from "../assets/locationn.png"


function contact() {
  return (
    <div className='contact' id='contact'>
      <div>
      <h1 className='head1' style={{width:"20rem"}}>Need additional information?</h1>
      
      <p className='para'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
      
      <div className='about-comp'>
      <div className='phone-no'>
      <img className='receiver' src={receiver} />
      <p style={{padding:"0px",height:"1rem",margin:"0px",color:"black" }}>(123)456-789</p> 
      </div>   
      <div className='phone-no'>
        <img className='receiver' src={mail} alt="" />
        <p style={{padding:"0px",height:"1rem",margin:"0px",color:"black" }}>carrental12@gmail.com</p> 
        </div> 
        <div className='phone-no'>
        <img className='receiver' src={locationn} alt="" />
        <p style={{padding:"0px",height:"1rem",margin:"0px",color:"black" }}>Rewa,Madhya Pradesh</p> 
        </div> 
      
      </div>
      <div>

      </div>
      </div>
    <div className="sent-message">
    <p style={{fontSize:"1rem" ,padding:"0px",height:"1rem",margin:"0px",color:"black", fontWeight:"700"}}>Full Name<span>*</span></p> 
    <input type="text" placeholder='E.g. Harsh singh'/>
    <p style={{fontSize:"1rem",padding:"0px",height:"1rem",margin:"0px",color:"black", fontWeight:"700"}}>Email<span>*</span></p> 
    <input type="text" placeholder='youremail@gmail.com'/>
    <p style={{fontSize:"1rem",padding:"0px",height:"1rem",margin:"0px",color:"black",fontWeight:"700" }}>Tell us about it<span>*</span></p> 
    <textarea name="" id="" cols="30" rows="10" placeholder='write here...'></textarea>
     <button className='contact-btn'>Send Message</button>
    </div>
    
    </div>
  )
}

export default contact
