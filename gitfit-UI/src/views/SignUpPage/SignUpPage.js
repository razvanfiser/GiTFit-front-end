import React , {useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import SignUpElement from "../../components/SignUp/SignUpElement"


export default function SignUpPage() {

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
        <SignUpElement/>
        <div>OKK</div>
      </div>
    </div>
  );
}
