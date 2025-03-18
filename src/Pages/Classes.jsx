import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Data from '../Components/Courses/Data';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';

const Classes = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Data />
            <div className="youtube_frame">
                <iframe
                    width="1000"
                    height="600"
                    src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" allowfullscreen>
                </iframe>
            </div>
            <Footer />
        </>
    )
}

export default Classes;