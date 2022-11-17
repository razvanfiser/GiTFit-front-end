import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';
  
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle}/>
        <NavLogo to='/about'>GiTFit</NavLogo>
        <NavMenu>
          {/*<NavLink to='/about' activeStyle>
            Main
          </NavLink>
          <NavLink to='/progress' activeStyle>
            Progress
          </NavLink>
          <NavLink to='/chat' activeStyle>
            Chat
          </NavLink>
          <NavLink to='/user' activeStyle>
            Logged in <br/> Jacob Jones
  </NavLink>*/}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;