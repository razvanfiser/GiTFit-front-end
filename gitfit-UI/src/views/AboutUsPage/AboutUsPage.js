import React from "react";
import Navbar from "../../components/Navbar/navbar";
import './aboutUs.css';
import { BrowserRouter as Router} from "react-router-dom";

export default function AboutUsPage() {

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Router>
          <Navbar />
        </Router>
        <button type="button" onClick={handleClick}>
         Click Me
        </button>
      </div>
    </div>
  );
}
