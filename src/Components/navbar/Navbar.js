import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../Assets/Images/logolight.png';
import { FaHome, FaInfo, FaMailBulk, FaNewspaper, FaSearch, FaServicestack, FaSignInAlt } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);



    window.onscroll = () => {
        setIsScrolled(window.pageYOffset > 80 ? true : false);
        return () => (window.onscroll = null);
    }

    const handleMenuBar = (e) => {
        setMenuOpened(!menuOpened);
    }
    return (
        <div className={isScrolled ? "navbar scroll-effect" : "navbar"}>
            <div className="nav-cont">
                <div className="left-menu">
                    <div className="logo">
                        <img src={logo} alt="hello" style={{ width: "150px" }} />
                    </div>

                    <div className="search-box">
                        <input type="text" className='search-input' placeholder='Search Here' />
                        <button className='search-btn' ><FaSearch /></button>
                    </div>


                </div>
                <div className="right-menu">
                    {/* NAV ITEMS MOBILE */}
                    {/* ************************** */}
                    <div className='nav-item-mobile'>
                        <button onClick={handleMenuBar} >{!menuOpened ? <HiBars3BottomRight /> : <GrFormClose />}</button>
                        <ul className={menuOpened ? isScrolled ? "nav-items-for-mobl openedmenu navscrleffect" : "nav-items-for-mobl openedmenu" : "nav-items-for-mobl"}>
                            <li className="routes-mbl"><FaHome className='menu-icon' /><span className='menuitmrev'><Link className='custlink' to={'/'}>HOME</Link></span></li>
                            <li className="routes-mbl"><FaInfo className='menu-icon' /><span className='menuitmrev'>
                                ABOUT US
                                <div className="dropdownlinks">
                                    <Link className='custlink'>Health & Saftey</Link>
                                </div>
                            </span></li>
                            <li className="routes-mbl"><FaServicestack className='menu-icon' /><span className='menuitmrev'>SERVICES</span></li>
                            <li className="routes-mbl"><FaNewspaper className='menu-icon' /><span className='menuitmrev'>LATEST NEWS</span></li>
                            <li className="routes-mbl"><FaMailBulk className='menu-icon' /><span className='menuitmrev'>CONTACT</span></li>
                        </ul>
                    </div>
                    {/* NAV ITEMS */}
                    {/* ************************** */}
                    <ul className="nav-items">
                        <li className="routes"><FaHome className='menu-icon' /><span className='menuitmrev'><Link className='custlink' to={'/'}>HOME</Link></span></li>
                        <li className="routes"><FaInfo className='menu-icon' /><span className='menuitmrev'>
                            ABOUT US
                            <div className="dropdownlinks">
                                <Link to={'/aboutus/hsap'} className='custlink'>Health & Saftey</Link>
                                <Link to={'/aboutus/envp'} className='custlink'>Environmental policy</Link>
                            </div>
                        </span></li>
                        <li className="routes"><FaServicestack className='menu-icon' /><span className='menuitmrev'>
                            SERVICES
                            <div className="dropdownlinks">
                                <Link to={'/services/cai'} className='custlink'>C&I</Link>
                                <Link to={'/services/elwr'} className='custlink'>Electrical Works</Link>
                                <Link to={'/services/mhwr'} className='custlink'>Mechanical Works</Link>
                                <Link to={'/services/ohsr'} className='custlink'>Other Services</Link>
                            </div>
                        </span></li>
                        <li className="routes"><FaNewspaper className='menu-icon' /><span className='menuitmrev'><Link className='custlink' to={'/latestnews'}>LATEST NEWS</Link></span></li>
                        <li className="routes"><FaMailBulk className='menu-icon' /><span className='menuitmrev'>CONTACT</span></li>
                        {/* <li className="routes"><FaSignInAlt className='menu-icon' /><span className='menuitmrev'><Link className='custlink' to={'/latestnews'}>Register</Link></span></li> */}
                    </ul>



                </div>
            </div >
        </div >
    )
}

export default Navbar;