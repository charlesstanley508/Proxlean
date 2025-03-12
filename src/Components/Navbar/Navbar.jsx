import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../Assets/Logo.png';
import Banner from '../../Assets/Bg1.png';

function Navbar() {

  const [navMenu, setMenu] = useState(false);

  const toggleMenu = ()=>{
    setMenu(!navMenu);
  };


  return (
    <>
      <div className="navbar">

        <img src={Logo} alt="" className="logo" />

        <div className="search-box">
          <input type="text" placeholder="Search for topics, courses , instructors , or topics" />
          <i class="fa fa-search"></i>
        </div>

        <ul className={navMenu ? `navbar-link active` : `navbar-link`}>
          <li className="active">Home</li>
          <li>Courses</li>
          <li>Live Classes</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          <i class="fa fa-bars"></i>
        </div>

      </div>

      <section className="banner">

        <div className="banner-text">
          <h2>Unlock Your Potential <br /> with Expert-Led Courses!</h2>
          <p>Join thousands  of learners in mastering new  skills</p>
        </div>

        <div className="banner-img">
          <img src={Banner} alt="" />
        </div>

      </section>
    </>
  )
}

export default Navbar