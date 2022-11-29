import React from 'react';
import "./carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../Assets/Images/ej-yao-D46mXLsQRJw-unsplash.jpg';
// import img2 from '../../Assets/Images/maksym-kaharlytskyi-u13zBF4r56A-unsplash.jpg';
// import img3 from '../../Assets/Images/thisisengineering-raeng-lx8CooX66ms-unsplash.jpg';


const MyCarousel = () => {
  // const [isActive, setIsActive] = useState(false);
  const handleCrouselChange = (indx, item) => {
    let headerContent = document.getElementsByClassName("header-content");
    if (indx == 0) {
      headerContent[1].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[2].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    } else if (indx == 1) {
      headerContent[2].classList.add("headactive");
      headerContent[0].classList.remove("headactive");
      headerContent[1].classList.remove("headactive");
      headerContent[3].classList.remove("headactive");
      headerContent[4].classList.remove("headactive");
    } else if (indx == 2) {
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
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} interval={5000} dynamicHeight swipeable={false} autoPlay infiniteLoop onChange={handleCrouselChange}>
        <div className='carousel-wrapper' >
          <img src="https://ik.imagekit.io/dexo68yudb/ej-yao-D46mXLsQRJw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669095729871"  alt="img1"  />
          <div className="header-content" id='first' >
          <div className="headercontent-wrap">
              <h1 className="lighttxt">Inspiring The Next</h1>
              <h1 className="boldtxt">Born To Innovate</h1>
              <h1 className="bottline">Provide the best solution</h1>
            </div>
          </div>
        </div>
        <div className='carousel-wrapper'>
          <img src="https://ik.imagekit.io/dexo68yudb/maksym-kaharlytskyi-u13zBF4r56A-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669095728328"  alt="img1"  />
          <div className="header-content" id='second'>
            <div className="headercontent-wrap">
              <h1 className="lighttxt">Inspiring The Next</h1>
              <h1 className="boldtxt">Born To Innovate</h1>
              <h1 className="bottline">Provide the best solution</h1>
            </div>
          </div>
        </div>
        <div className='carousel-wrapper'>
          <img src="https://ik.imagekit.io/dexo68yudb/thisisengineering-raeng-lx8CooX66ms-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669095730733" alt="img1"  />
          <div className="header-content" id='third'>
          <div className="headercontent-wrap">
              <h1 className="lighttxt">Inspiring The Next</h1>
              <h1 className="boldtxt">Born To Innovate</h1>
              <h1 className="bottline">Provide the best solution</h1>
            </div>
          </div>
        </div>

      </Carousel>

    </div>
  )
}

export default MyCarousel;