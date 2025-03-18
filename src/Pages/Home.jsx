import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Courses from '../Components/Courses/Courses';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Banner />
            <Categories />
            <Courses />
            <Footer />
        </div>
    )
}

export default Home;