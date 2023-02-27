import React from 'react';
import "./carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const MyCarousel = () => {
  // const [isActive, setIsActive] = useState(false);
  const handleCrouselChange = (indx, item) => {
    let headerContent = document.getElementsByClassName("header-content");
    if (indx === 0) {
      headerContent[1].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[2].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    } else if (indx === 1) {
      headerContent[2].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[1].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    } else if (indx === 2) {
      headerContent[3].classList.add("headactive");
      // headerContent[0].classList.remove("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[1].classList.remove("headactive");
      headerContent[2].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    }
  }

  let carouselData = [
    {
      name: "first",
      img: "https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
      txtcolor:'white'
    },
    {
      name: "second",
      img: "https://ik.imagekit.io/dexo68yudb/2514340.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676363192139",
      txtcolor:'white',
    },
    {
      name: "third",
      img: "https://ik.imagekit.io/dexo68yudb/istockphoto-514269723-612x612.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676363847345",
      txtcolor:'white'
    },

  ]
  return (
    <div className="carousel">
      <Carousel showStatus={false} showIndicators={false} autoPlay={true} showThumbs={false} interval={5000} swipeable={false}  infiniteLoop onChange={handleCrouselChange}>
        {carouselData.map((slides, indx) => {
          return (
            <div key={indx} className='carousel-wrapper' >
              <img src={slides.img} alt="img1" />
              <div className="black-overlay"></div>
              <div className="header-content" id='first' style={{color:slides.txtcolor}}>
                <div className="headercontent-wrap">
                  <h1 className="lighttxt">Inspiring The Next</h1>
                  <h1 className="boldtxt">Born To Innovate</h1>
                  <h1 className="bottline">Provide the best solution</h1>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>

    </div>
  )
}

export default MyCarousel;