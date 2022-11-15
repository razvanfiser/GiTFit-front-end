import React , {useState} from "react";
import './aboutUs.css';
import { BrowserRouter as Router} from "react-router-dom";

import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";

export default function AboutUsPage() {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
        </Router>
        <button type="button" onClick={handleClick}>
         Click Me
        </button>
      </div>
    </div>
  );
}
