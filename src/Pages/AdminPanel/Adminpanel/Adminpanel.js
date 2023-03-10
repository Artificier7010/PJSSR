import React, { useState } from 'react';
import { FaImages, FaInfo, FaListAlt, FaSignOutAlt, FaUserCog, FaUserShield } from 'react-icons/fa';
import './adminpanel.scss';
import logo from '../../../Assets/Images/logolight.png';
import { Link, useParams } from 'react-router-dom';
import Createposts from '../CreatePosts/Createposts';
import Showblogs from '../ShowBlogs/Showblogs';


const Adminpanel = () => {
    let username = "Animesh Verma";
    const [toggle, setHandleToggle] = useState(false);
    const { dashid } = useParams();

    const handleToggleClick = () => {
        setHandleToggle(!toggle);
    }
    return (
        <div className='Adminpanel'>
            <div className="admin-panel-wrap">
                {/* Header */}
                <div className="admin-panel-header">
                    <div className="header-left">
                        <ul>
                            <li><button onClick={handleToggleClick} className={toggle ? 'sidebar-btn clicked' : 'sidebar-btn'}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </button></li>
                            <li><img src={logo} alt={'Pjssr logo pjssr admin panel'} width={100} /></li>
                            <li>Welcome {username}</li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <button>Logout &nbsp; <FaSignOutAlt /></button>
                    </div>
                </div>


                <div className="sect-wrap">
                    <div className={toggle ? "side-bar toggled" : "side-bar"}>
                        <div className="side-bar-wrap">
                            <ul>
                                <li className={toggle ? "toggled": ''}><Link to={'/admin/dash/blogs'}>{toggle ? <div><FaImages />&nbsp;Blogs</div> : <FaImages />}</Link></li>
                                <li className={toggle ? "toggled": ''}><Link>{toggle ? <div><FaUserShield />&nbsp;Admins</div> : <FaUserShield />}</Link></li>
                                <li className={toggle ? "toggled": ''}><Link>{toggle ? <div><FaListAlt />&nbsp;Categories</div> : <FaListAlt />}</Link></li>
                                <li className={toggle ? "toggled": ''}><Link>{toggle ? <div><FaUserCog />&nbsp;Profile</div>: <FaUserCog />}</Link></li>
                            </ul>
                            <div className={toggle ?"bottom toggled":"bottom"}>
                                <Link>{toggle ? <div><FaInfo />&nbsp;Info</div> : <FaInfo />}</Link>
                            </div>
                        </div>
                    </div>

                    <div className="show-area">


                        <div className="show-area-wrap">
                            {/* The Blogs Show Section */}
                            {/* **************************************** */}
                            {dashid === "blogs" ? (
                                <Showblogs/>
                            ) : dashid==="createposts" ? (
                                <Createposts/>
                            ) : null}
                        </div>
                    </div>
                </div>


                {/* Sections */}

                <div className="sections-wrapper">





                </div>
            </div>
        </div>
    )
}

export default Adminpanel