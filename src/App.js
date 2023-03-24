import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Booking from "./components/Booking";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Whyus from "./components/Whyus";
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Booking/>
     <Checkout />
     <About />
     <Whyus />
     <Contact />
    </div>
  );
}

export default App;
