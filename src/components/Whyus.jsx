import React from 'react';
import "./Whyus.css";
import crossd from "../assets/crossd.png";
import pricing from "../assets/pricing.png";
import hiddencharges from "../assets/hiddencharges.png";


function Whyus() {
  return (
    <div className='whyus' id='whyus'>
      <div className="left-s">
        <h2 className='head2'>Why Choose Us</h2>
      <h1 className='head1'>Best valued deals you will ever find</h1>
      <p className='para'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
      <button className='whyus-btn'>Find Details</button>
      </div>
      <div className="right-s">
        <div className="whyus-content">
          <img className='con-img' src={crossd} />
          <div>
          <h2 className='head2'>Cross Country Drive</h2>
          <p className='paraa'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
          </div>
        </div>
        <div className="whyus-content">
            <img className='con-img' src={pricing} />
          <div>
          <h2 className='head2'>All Inclusive Pricing</h2>
          <p className='paraa'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
          </div></div>
        <div className="whyus-content">
            <img className='con-img' src={hiddencharges} />
          <div>
          <h2 className='head2'>No Hidden Charges</h2>
          <p className='paraa'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
          </div></div>
      </div>
    </div>
  )
}

export default Whyus
