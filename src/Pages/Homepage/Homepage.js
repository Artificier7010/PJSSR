import React, { useEffect, useRef, useState } from 'react';
import MyCarousel from '../../Components/carousel/MyCarousel';
import Navbar from '../../Components/navbar/Navbar';
import vectorimg from '../../Assets/Images/homepagevector.jpg';
import './homepage.scss';
import Newslist from '../../Components/newslist/Newslist';
import Footer from '../../Components/footer/Footer';
// import { useInView } from 'react-intersection-observer';

const Homepage = () => {

  const fromleft = useRef();
  const frombottom = useRef();
  const [frmLeftVisible, setFrmLeftVisible] = useState();
  const [frmBottomVisible, setFrmBottomVisible] = useState();

  // Dummy Data
  let dumdata = [
    {
      title: "First Post me kya kya likh sakte hai bhai bata na yaar aisa mat kar yaar",
      date: "21/07/2000",
      time: "8:55",
      category: "Technology",
    },
    {
      title: "Second Post fuyf fuyf fguyfuy f8f8g8g8i7g ggg89 g98g99gh9h8 9h98h98h09j gh89g89hg98h98h9h fgf8f86",
      date: "21/07/2000",
      time: "8:55",
      category: "Technology",
    },
    {
      title: "Third Post",
      date: "21/07/2000",
      time: "8:55",
      category: "Technology",
    },
    {
      title: "Fourth Post",
      date: "21/07/2000",
      time: "8:55",
      category: "Technology",
    },
  ]

  useEffect(() => {
    const obs1 = new IntersectionObserver((entries) => {
      const entry1 = entries[0];
      setFrmLeftVisible(entry1.isIntersecting);
    });
    const obs2 = new IntersectionObserver((entries) => {
      let entry2 = entries[0];
      setFrmBottomVisible(entry2.isIntersecting);
    });
    obs1.observe(fromleft.current);
    obs2.observe(frombottom.current);
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
            <div className={frmLeftVisible ? "contsecleft fadeInLeft" : "contsecleft"} ref={fromleft}>
              <div className="sec-details">
                <h1 className="sec-title">ABOUT US</h1>
                <h1 className="sec-head">We are an Indian-based organization specializing in mechanical, electrical and C&I services.</h1>
                <p className="sec-content"><b> PJSSR</b> was founded in 2020 as a specialized engineering services company catering to the power, oil & gas, petrochemical, chemical, steel, marine, offshore, and pharmaceutical industries. With a strong focus on mechanical, electrical, and C&I services</p>
              </div>


            </div>
            <div className="contsecright">
              <img src={vectorimg} alt="vectr" style={{ width: "100%" }} />
            </div>

          </div>

          {/* SECTION 2 */}
          {/* ******************************** */}
          <div className="contentsec2">
            <div className="cards-wraper" ref={frombottom}>

              <div className={frmBottomVisible ? "card fadeInRight" : "card"} >
                <div className="card-icon"><img src="https://img.icons8.com/ios/50/a80f0d/conference-call--v1.png" alt='icon' /></div>
                <div className="card-heading">Committed Teams</div>
                <div className="card-description">Dedicated to assisting its clients in achieving their desired outcomes and providing them with customised experiences.</div>
              </div>

              <div className={frmBottomVisible ? "card fadeInRight" : "card"} style={{ animationDelay: "0.7s" }}>
                <div className="card-icon"><img src="https://img.icons8.com/ios/50/a80f0d/geography.png" alt='icon' /></div>
                <div className="card-heading">Worldwide Expertise</div>
                <div className="card-description">Our company takes a progressive approach to technology and marketing techniques, and they are not yet aware of that.</div>
              </div>

              <div className={frmBottomVisible ? "card fadeInRight" : "card"} style={{ animationDelay: "0.9s" }}>
                <div className="card-icon"><img src="https://img.icons8.com/laces/60/a80f0d/greentech.png" alt='icon' /></div>
                <div className="card-heading">Innovation</div>
                <div className="card-description">We value and promote seamless interaction because it allows us to identify with others.</div>
              </div>

            </div>

          </div>


          {/* SECTION 3 */}
          {/* ********************************** */}
          <div className="contentsec3">
            <h1 className='sec-title'>SPECIALIZATIONS</h1>
            <h1 className='sec-head'>Perfect Solutions For Any Industry</h1>

            <div className="specialization-cards">
              <div className="spe-card">
                <div className="spe-card-thumb"><img src="https://ik.imagekit.io/dexo68yudb/steam-turbine-powder-generation-market-fluidhandlingpro.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669001582963" alt="placeh" /></div>
                <h1 className="spe-card-head">Power Generation</h1>
                <a href="#">More Details</a>
              </div>

              <div className="spe-card">
                <div className="spe-card-thumb"><img src="https://ik.imagekit.io/dexo68yudb/oil-and-gas_mobile.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669001671635" alt="placeh" /></div>
                <h1 className="spe-card-head">Oil & Gas, Onshore, Offshore and</h1>
                <a href="#">More Details</a>
              </div>

              <div className="spe-card">
                <div className="spe-card-thumb"><img src="https://ik.imagekit.io/dexo68yudb/istock-939107700-shipbuilding.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669001709956" alt="placeh" /></div>
                <h1 className="spe-card-head">Marine and Ship Building</h1>
                <a href="#">More Details</a>
              </div>

              <div className="spe-card">
                <div className="spe-card-thumb"><img src="https://ik.imagekit.io/dexo68yudb/Two_small_test_tubes_held_in_spring_clamps.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669001827377" alt="placeh" /></div>
                <h1 className="spe-card-head">Pharmaceutical and Petrochemical</h1>
                <a href="#">More Details</a>
              </div>

            </div>


          </div>

          {/* SECTION 4 */}
          {/* ********************************* */}
          <div className="contentsec4">
            <h1 className='sec-title'>OUR BLOG</h1>
            <h1 className='sec-head'>The Latest</h1>

            <div className="Newslist-wrapper">
              <Newslist
                listitems={dumdata}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Homepage