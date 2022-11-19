import React , {useState} from "react";
import { BrowserRouter as Router, useHistory} from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';

import './SignUpElement.css';

export default function SignUpElement() {

  
let history = useHistory();

const redirectSignUpPage = () => {
  history.push('/about')
}

    return (

      <div>
        <div class="wrapper">
            <div onClick={redirectSignUpPage}>Hi</div>
        </div>
      </div>
    );
  }