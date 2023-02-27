import React from 'react';
import './footer.scss';
import logo from '../../Assets/Images/logodark.png';
import {FaCopyright, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footcol">
            <div className="foot-logo">
                <img src={logo} alt="logo" width={200}/>
            </div>
            <p>We are an Indian-based organization specializing in mechanical, electrical and C&I services.</p>
            <div className="contact-icons">
                <a href="#"> <FaFacebookSquare/></a>
                <a href="#"><FaInstagramSquare/></a>
                <a href="#"><FiMail/></a>
                <a href="#"> <FaLinkedin/></a>
                <a href="#"> <FaTwitterSquare/></a> 
            </div>
            <p className='copyright'><FaCopyright/>&nbsp;2022 PJSSR IN All rights are reserved</p>
        </div>
        <div className="footcol">
            <h1 className='foot-head'>Services</h1>
            <ul className='foot-menu'>
                <li><a href="#">Title</a></li>
                <li><a href="#">Title</a></li>
                <li><a href="#">Title</a></li>
            </ul>
        </div>
        <div className="footcol">
            <h1 className='foot-head'>About Us</h1>
            <ul className='foot-menu'>
                <li><a href="#">Title</a></li>
                <li><a href="#">Title</a></li>
                <li><a href="#">Title</a></li>
            </ul>
        </div>
        <div className="devloped-by">
            <p>Developed And Manged By <a href="#">Artificiers</a></p>
        </div>
    </div>
  )
}

export default Footer;