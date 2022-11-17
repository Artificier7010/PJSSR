import React from 'react';
import MyCarousel from '../../Components/carousel/MyCarousel';
import Navbar from '../../Components/navbar/Navbar';
import './homepage.scss';

const Homepage = () => {
  return (
    <div className='Homepage'>
        <Navbar/>
        <div className="homepage-header">
          <MyCarousel/>
        </div>
        <div className="sec"></div>
        <div className="sec"></div>
        <div className="sec"></div>
    </div>
  )
}

export default Homepage