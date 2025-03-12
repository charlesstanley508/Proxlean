import React from 'react';
import '../../Components/Footer/Footer.css';
import Logo from '../../Assets/Logo.png'


const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="footer-top">

                    <div className="footer-box1">
                        <img src={Logo} alt="" />
                        <p>A place where you can earn skills and gain experiences by learning everyday</p>
                    </div>
                    <div className="footer-box2">
                        <h2>OUR COMPANY</h2>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Help And Support</li>
                        </ul>
                    </div>
                    <div className="footer-box3">
                        <h2>IMPORTANT LINKS</h2>
                        <ul>
                            <li>Courses</li>
                            <li>About Us</li>
                            <li>live pages</li>
                            <li>How it Works</li>
                        </ul>
                    </div>
                    <div className="footer-box4">
                        <h2>POLICIES</h2>
                        <ul>
                            <li>Term & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Collaboration Policy</li>
                        </ul>
                    </div>


                </div>

            </div>
        </>
    )
};

export default Footer;