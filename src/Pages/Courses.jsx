import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Data from '../Components/Courses/Data';

import frame1 from '../Assets/Banner-frame1.png'


const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="courses_banner">
        <div>
          <h2>Courses</h2>
          <div className="top-nav">
            <a href="">Home/</a>
            <a href="">Categories/</a>
            <a href="">Courses</a>
          </div>
        </div>
      </div>

      <section>

        <div className="courses-bar">
          <div className="courses-nav">
            <h3>All Courses</h3>

            <div className="courses-option">
              <a href="" className="btn">All</a>
              <a href="" className="btn">Graphic Design</a>
              <a href="" className="btn">Web Design</a>
              <a href="" className="btn">UI Design</a>
            </div>
          </div>
        </div>

        <Data />
        <div className="banner2">
          <img src={frame1} alt="" />
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Courses;