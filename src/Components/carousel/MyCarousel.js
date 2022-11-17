import React, { useState } from 'react';
import "./carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../Assets/Images/ej-yao-D46mXLsQRJw-unsplash.jpg';
import img2 from '../../Assets/Images/ricardo-gomez-angel-sYK-jN0sKBY-unsplash.jpg';
import img3 from '../../Assets/Images/thisisengineering-raeng-lx8CooX66ms-unsplash.jpg';


const MyCarousel = () => {
  // const [isActive, setIsActive] = useState(false);
  const handleCrouselChange = (indx, item) => {
    let headerContent=document.getElementsByClassName("header-content");
    if(indx==0){
      headerContent[1].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[2].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    }else if(indx==1){
      headerContent[2].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[1].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    }else if(indx==2){
      headerContent[3].classList.add("headactive");
      // headerContent[0].classList.remove("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[1].classList.remove("headactive");
      headerContent[2].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    }
  }
  return (
    <div className="carousel">
      <Carousel showIndicators  showThumbs={false} interval={4000} autoPlay infiniteLoop swipeable onChange={handleCrouselChange}>
        <div className='carousel-wrapper' style={{ width: "100%", height: "100vh", objectFit: "cover", objectPosition: "bottom" }}>
          <img src={img1} alt="img1" style={{width:"100%",height:"100%"}}/>
          <div className="header-content" id='first' >
            <h1 className="lighttxt">Inspiring The Next</h1>
            <h1 className="boldtxt">Born To Innovate</h1>
            <h1 className="bottline">Provide the best solution</h1>
          </div>
        </div>
        <div className='carousel-wrapper' style={{ width: "100%", height: "100vh" }}>
          <img src={img2} alt="img1" style={{ width:"100%",height:"100%" }}/>
          <div className="header-content"  id='second'>
            <h1 className="lighttxt">Inspiring The Next</h1>
            <h1 className="boldtxt">Born To Innovate</h1>
            <h1 className="bottline">Provide the best solution</h1>
          </div>
        </div>
        <div className='carousel-wrapper' style={{ width: "100%", height: "100vh" }}>
          <img src={img3} alt="img1" style={{ width:"100%",height:"100%" }} />
          <div className="header-content"  id='third'>
            <h1 className="lighttxt">Inspiring The Next</h1>
            <h1 className="boldtxt">Born To Innovate</h1>
            <h1 className="bottline">Provide the best solution</h1>
          </div>
        </div>

      </Carousel>

    </div>
  )
}

export default MyCarousel;