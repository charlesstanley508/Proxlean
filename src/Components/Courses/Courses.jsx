import React from 'react';
import '../../Components/Courses/Courses.css';
import Cat7 from '../../Assets/Cat7.png';
import Cat8 from '../../Assets/Cat8.png';
import Cat9 from '../../Assets/Cat9.png';
import Cat10 from '../../Assets/Cat10.png';


const Courses = () => {
  return (
    <>
      <div className="Courses">

        <div className="course-container">
          <div className="img-box">
            <img src={Cat7} alt="" />
          </div>
          <div className="course-text">
            <h1>Mastering  python from Scratch...</h1>
            <p className="cover">Beginner-friendly</p>
            <div className="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
            <p>Instructor: John Doe </p>
          </div>

        </div>

        <div className="course-container">
          <div className="img-box">
            <img src={Cat8} alt="" />
          </div>
          <div className="course-text">
            <h1>Mastering  Data science from Scratch...</h1>
            <p className="cover">Beginner-friendly</p>
            <div className="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
            <p>Instructor: John Doe </p>
          </div>

        </div>

        <div className="course-container">
          <div className="img-box">
            <img src={Cat9} alt="" />
          </div>
          <div className="course-text">
            <h1>Mastering from node.js Scratch...</h1>
            <p className="cover">Beginner-friendly</p>
            <div className="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
            <p>Instructor: John Doe </p>
          </div>

        </div>

      </div>

      <div className="courses-banner">
        <div className="right-img">
          <img src={Cat10} alt="" />
        </div>
      </div>
    </>
  )
}

export default Courses;