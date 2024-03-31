import React, { useState, useEffect, useRef } from 'react';
import "./header.css";
import bell from "../../assets/images/bell.svg";

const Header = ({ isMenuOpen }) => {
  const pic = "https://res.cloudinary.com/duqzhkepf/image/upload/v1710347435/opvxrdkiobiayxdblwle.jpg";
  return (
    <div
      className={`headerContainer ${isMenuOpen ? "collapsedMenu" : ""}`}>
      <div className="headerLeft">
        <input className='searchInput' placeholder='Search & Enter' />
      </div>
      <div className="headerRight">
        <img style={{ filter: 'invert(100%)' }} className='headerRightBellIcon' src={bell} alt='bell' />
        <img className='profileImage' src={pic} alt='profile' />
      </div>
    </div >

  )
}

export default Header