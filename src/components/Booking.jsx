import React from 'react';
import "./Booking.css";
import caricon from "../assets/caricon.png";
import locationn from "../assets/locationn.png";
import {Link} from "react-scroll"


function Booking() {
  return (
    <div className='book-content' id='booking'>
      <h2>Book a car</h2>
      <div className='content'><div><h5 className='h5'><img src={caricon} alt="" className="imgg" />  Select Your Car Type<span>*</span></h5>
        <select className='selector'>
          <option value="select your car type">Select your car type</option>
          <option value="Audi A1S-Line">Audi A1S-Line</option>
          <option value="VW Golf 6">VW Golf 6</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="BMW">BMW 320 ModernLine</option>
          <option value="Mercedes">Mercedes-Benz GLK</option>
          <option value="VW Passat CC">VW Passat CC</option>
        </select>
      </div>
        <div><h5 className='h5'><img src={locationn} alt="" className="imgg" />  Pickup<span>*</span></h5>
          <select className='selector'>
            <option value="pickup location">Select pick up location</option>
            <option value="Delhi">Delhi</option>
            <option value="Bombay">Bombay</option>
            <option value="Indore">Indore</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>
        <div><h5 className='h5'><img src={locationn} alt="" className="imgg" />  Dropof<span>*</span></h5>
          <select className='selector'>
            <option value="pickup location">Select drop off location</option>
            <option value="Delhi">Delhi</option>
            <option value="Bombay">Bombay</option>
            <option value="Indore">Indore</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>
      </div>
      <Link
      to="checkout"
       span={true}
       smooth={true}><div className="search-btnn">
        <button className='search-btn'>Search</button>
       </div>  </Link>


    </div>
  );
}

export default Booking
