import React , {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import './aboutUs.css';
import RunningImage from "../../assets/img/runningathletegradient.jpg"
import postImage1 from "../../assets/img/postimage1.jpg"
import postImage2 from "../../assets/img/postimage2.jpg"
import postImage3 from "../../assets/img/postimage3.jpg"


export default function AboutUsElement() {
  return (

    <div>
      <div class="wrapper">
      <div class="box headerGrid">
        <img className="homeScreenImage" src={RunningImage} alt="Running Athlete"/>
        <div class="box headerText">
          <h1>Start Giting Fit now and keep track of your goals</h1>
        </div> </div>
      <div class="box blog"><h1>Newsletter</h1></div>
      <div class="box content">
        <div class = "box postGrid">
          <div class = "postImage"><img className="postImage" src={postImage1} alt="doing nothing"/></div>
          <div class = "postTitle">Not Doing Anything All Day Makes You Fat - Study Shows</div>
        </div>
        <div class = "box postGrid">
          <div class = "postImage"><img className="postImage" src={postImage2} alt="getting bigger"/></div>
          <div class = "postTitle">We're Sizing Up! Important Update Coming This December</div>
        </div>
        <div class = "box postGrid">
          <div class = "postImage"><img className="postImage" src={postImage3} alt="arnold"/></div>
          <div class = "postTitle">Fitness Legend Endorses GiTFit: "I wish I had this back in my day"</div>
        </div>
      </div>
        <div class="box footer">
          <div class ="box footerTitle"><h1>Keep in touch</h1></div>
          <div class = "footerContent">
            <div class = "footerIcon"> O</div>
            <div class = "footerContactName">Give Us A Call</div>
            <div class = "footerContactData">+373 699 999 99</div>
          </div>
          <div class = "footerContent">
            <div class = "footerIcon"> Q</div>
            <div class = "footerContactName">Write Us An Email</div>
            <div class = "footerContactData">alma.lawson@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
