import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../Assets/Logo.png';


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
          <li className="active">
            <a href="/">Home</a>
            </li>
          <li>
            <a href="Courses">Courses</a>
            </li>
          <li>
            <a href="Classes">Live Classes</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          <i class="fa fa-bars"></i>
        </div>

      </div>

    </>
  )
}

export default Navbar