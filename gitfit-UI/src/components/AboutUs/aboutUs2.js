import React , {useState} from "react";
import Video from '../../assets/video/video.mp4'
import { BrowserRouter as Router} from "react-router-dom";

import {
    HomeContainer,
    HomeBg,
    VideoBg, 
    HomeContent,
    HomeH1,
    HomeP,
    HomeBtnWrap,
    HomeRoute,
    HomeA,
    ArrowForward,
    ArrowRight
} from './aboutUs2Elements'

import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";

export default function AboutUsElement() {

  const[isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover =() => {
    setHover(!hover)
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div>
        <HomeContainer>
            <HomeBg>
                {/*<VideoBg autoPlay loop muted src={Video} type='video/mp4'/>*/}
            </HomeBg>
            <HomeContent>
                <HomeH1>GiTFit</HomeH1>
                <HomeP>
                    Lorem ipsum dolor sit amet. Et corrupti voluptatem et minima aliquam aut accusamus galisum ab placeat 
                    excepturi qui minus provident a enim quam. Est blanditiis omnis ea libero placeat ab provident dolor 
                    hic accusamus consequatur. Ea iusto quasi ut quia dolor et galisum dolore eos quos explicabo sit dicta 
                    odit est inventore aliquam!
                </HomeP>
                <HomeBtnWrap>
                    <HomeRoute to = "/register">Register</HomeRoute>
                </HomeBtnWrap>
                <HomeA style = {{color: "blue", top: "0px"}} to = "/login">Already have an account? log-in!</HomeA>
            </HomeContent>
        </HomeContainer>
      </div>
    </div>
  );
}
