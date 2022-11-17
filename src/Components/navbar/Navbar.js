import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../Assets/Images/Picsart_22-11-14_08-52-30-755.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset > 80 ? true :false);
        return ()=>(window.onscroll=null);
    }
  return (
    <div className={isScrolled?"navbar scroll-effect":"navbar"}>
        <div className="nav-cont">
            <div className="left-menu">
                <div className="logo">
                    <img src={logo} alt="hello" style={{width:"150px"}}/>
                </div>
                <div className="search-box">
                    <input type="text" className='search-input' placeholder='Search Here' />
                    <button className='search-btn' ><FaSearch/></button>
                </div>
            </div>
            <div className="right-menu">
                <ul className="nav-items">
                    <li className="routes">HOME</li>
                    <li className="routes">ABOUT US</li>
                    <li className="routes">SERVICES</li>
                    <li className="routes">LATEST NEWS</li>
                    <li className="routes">CONTACT</li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar;