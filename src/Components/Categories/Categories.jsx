import React from 'react';
import '../Categories/Categories.css';
import Cat1 from '../../Assets/Cat1.jpeg';
import Cat2 from '../../Assets/Cat2.jpeg';
import Cat3 from '../../Assets/Cat3.png';
import Cat4 from '../../Assets/Cat4.jpeg';
import Cat5 from '../../Assets/Cat5.jpeg';
import Cat6 from '../../Assets/Cat6.png';



function Categories() {
  return (
    <>
      <div className="categories-section">

        <h2 className="categories-text">Explore <span>Categories</span></h2>

        <div className="categories-box">

          <div className="cat-box">
            <p>Website Development</p>
            <img src={Cat1} alt="" />
          </div>

          <div className="cat-box">
            <p>UI/UX </p>
            <img src={Cat2} alt="" />
          </div>

          <div className="cat-box">
            <p>Digital Illustration</p>
            <img src={Cat3} alt="" />
          </div>

          <div className="cat-box">
            <p>Architecture and Interior Design </p>
            <img src={Cat4} alt="" />
          </div>

          <div className="cat-box">
            <p>Content Writing </p>
            <img src={Cat5} alt="" />
          </div>

        </div>

        <div className="move-center">
          <button className="cat-btn">More Categories</button>
        </div>

      </div>

      <div className="skilled-Professionals">

        <div className="skilled-text">
          <h2>Bring Your Vision to Life <br /> with <span>Skilled  Professionals</span></h2>
          <p>Whether you're starting from scratch or scaling up, our network of experts is ready to assist. Partner with talented professionals trainers who can turn your learning into reality, one task at a time.</p>
          {/* <div className="move-center">
            <button className="cat-btn">Learn more</button>
          </div> */}
        </div>

        <div className="skilled-img">
          <img src={Cat6} alt=""  />
        </div>

      </div>
    </>
  )
}

export default Categories;