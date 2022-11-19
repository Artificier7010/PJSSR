import React, { useEffect, useRef, useState } from 'react';
import MyCarousel from '../../Components/carousel/MyCarousel';
import Navbar from '../../Components/navbar/Navbar';
import vectorimg from '../../Assets/Images/homepagevector.jpg';
import './homepage.scss';
// import { useInView } from 'react-intersection-observer';

const Homepage = () => {

  const fromleft=useRef();
  const [frmLeftVisible,setFrmLeftVisible] =useState();

  useEffect(() => {
    const observer=new IntersectionObserver((entries)=>{
      const entry=entries[0];
      setFrmLeftVisible(entry.isIntersecting)
    })
    observer.observe(fromleft.current)


  }, [])
  





  return (
    <div className='Homepage'>
      <Navbar />
      <div className="homepage-header">
        <MyCarousel />
      </div>

      <div className="homepage-content">
        <div className="our-center-container">

          {/* SECTION 1 */}
          {/* ****************************** */}
          <div className="contentsec1">
            <div className={frmLeftVisible ? "contsecleft fadeInLeft":"contsecleft"} ref={fromleft}>
              <div className="sec-details">
                <h1 className="sec-title">ABOUT US</h1>
                <h1 className="sec-head">We are an Indian-based organization specializing in mechanical, electrical and C&I services.</h1>
                <p className="sec-content"><b> PJSSR</b> was founded in 2020 as a specialized engineering services company catering to the power, oil & gas, petrochemical, chemical, steel, marine, offshore, and pharmaceutical industries. With a strong focus on mechanical, electrical, and C&I services</p>
              </div>


            </div>
            <div className="contsecright">
              <img src={vectorimg} alt="vectr" style={{width:"100%"}} />
            </div>

          </div>

          {/* SECTION 2 */}
          {/* ******************************** */}
        </div>
      </div>

    </div>
  )
}

export default Homepage