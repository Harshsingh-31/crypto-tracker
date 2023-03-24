import React, { useState } from 'react';
import "./Checkout.css";
//import audi  from "../assets/audi.jpg"

function Checkout() {

    const[price,setPrice]=useState("2800");
    const[model,setModel]=useState("Audi");
    const[mark,setMark]=useState("A1");
    const[year,setYear]=useState("2012");
    const[doors,setDoors]=useState("4/5");
    const[ac,setAc]=useState("Yes");
    const[transmission,setTransmission]=useState("Manual");
    const[fuel,setFuel]=useState("Gasoline");
    const [image, setImage] = useState('/images/audi.jpg');
    
    function Audi(){
        setPrice("2800");setModel("Audi");
        setMark("A1");setYear("2012");
        setDoors("4/5");setAc("Yes");
        setTransmission("Manual");setFuel("Gasoline");
        setImage('/images/audi.jpg');
    }
    function VW(){
        setPrice("2500");setModel("Golf 6");
        setMark("Volkswagen");setYear("2008");
        setDoors("4/5");setAc("Yes");
        setTransmission("Manual"); setFuel("diesel");
        setImage('/images/VW.jpg');
    }
    function Toyota(){
        setPrice("2200");setModel("Camry");
        setMark("Toyota");setYear("2006");
        setDoors("4/5");setAc("Yes");
        setTransmission("Automatic"); setFuel("Hybrid");
        setImage('/images/toyota.jpg');
    }
    function BMW(){
        setPrice("3000");setModel("320");
        setMark("BMW");setYear("2012");
        setDoors("4/5");setAc("Yes");
        setTransmission("Manual"); setFuel("Diesel");
        setImage('/images/BMW.jpg');
    }
    function Mercedes(){
        setPrice("3500");setModel("Benz GLK");
        setMark("Mercedes");setYear("2006");
        setDoors("4/5");setAc("Yes");
        setTransmission("Manual"); setFuel("Diesel");
        setImage('/images/mercedes.jpg');
    }
    function VW_CC(){
        setPrice("1800");setModel("Passat CC");
        setMark("Volkswagen");setYear("2008");
        setDoors("4/5");setAc("Yes");
        setTransmission("Automatic"); setFuel("Gasoline");
        setImage('/images/VWCC.jpg')
    }

  return (
    <div className='checkout' id='checkout'>
        <div className="model-text">
        <h2 className='h2222'>Vehical Models</h2>
        <h1 className='h11'>Our rental fleet</h1>
        <p className='ppp'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className="car-modelss">
            <div  className='car-names'>
                <button onClick={Audi} className='car-btn'>Audi A1S-Line</button>
                <button onClick={VW} className='car-btn'>VW Golf 6</button>
                <button onClick={Toyota} className='car-btn'>Toyota Camry</button>
                <button onClick={BMW} className='car-btn'>BMW 320 ModernLine</button>
                <button onClick={Mercedes} className='car-btn'>Mercedes-Benz GLK</button>
                <button onClick={VW_CC} className='car-btn'>VW Passat CC</button>
            </div>
            <div className="car-imggg">
             <img src={image} alt="" className="audi-img" />
            
            </div>
            <div className='car-features'>
               <table>
                <tr><td className='tdd' colSpan={2}>₹{price} / rent per day</td></tr>
                <tr><td>Model</td><td>{model}</td></tr>
                <tr><td>Mark</td><td>{mark}</td></tr>
                <tr><td>Year</td><td>{year}</td></tr>
                <tr><td>Doors</td><td>{doors}</td></tr>
                <tr><td>AC</td><td>{ac}</td></tr>
                <tr><td>Transmission</td><td>{transmission}</td></tr>
                <tr><td>fuel</td><td>{fuel}</td></tr>
                
               </table>
               <button className="reserve">RESERVE NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout
