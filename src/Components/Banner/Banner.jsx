import React from 'react';
import '../Banner/Banner.css';
import BannerImg from '../../Assets/Bg1.png';


const Banner = () => {
    return (
        <section className="banner">

            <div className="banner-text">
                <h2>Unlock Your Potential <br /> with Expert-Led Courses!</h2>
                <p>Join thousands  of learners in mastering new  skills</p>
            </div>

            <div className="banner-img">
                <img src={BannerImg} alt="" />
            </div>

        </section>
    )
}

export default Banner;