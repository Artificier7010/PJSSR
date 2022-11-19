import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../Assets/Images/Picsart_22-11-14_08-52-30-755.png';
import { FaHome, FaInfo, FaMailBulk, FaNewspaper, FaSearch, FaServicestack } from 'react-icons/fa';

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
                    <li className="routes"><FaHome className='menu-icon'/><span className='menuitmrev'>HOME</span></li>
                    <li className="routes"><FaInfo className='menu-icon'/><span className='menuitmrev'>ABOUT US</span></li>
                    <li className="routes"><FaServicestack className='menu-icon'/><span className='menuitmrev'>SERVICES</span></li>
                    <li className="routes"><FaNewspaper className='menu-icon'/><span className='menuitmrev'>LATEST NEWS</span></li>
                    <li className="routes"><FaMailBulk className='menu-icon'/><span className='menuitmrev'>CONTACT</span></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar;