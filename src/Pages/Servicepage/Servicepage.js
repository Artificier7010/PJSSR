import React from 'react';
import { useParams } from 'react-router-dom';
import Errorpage from '../../Components/404error/Errorpage';
import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/navbar/Navbar';
import './servicepage.scss';

const Servicepage = () => {
    let { srvcid } = useParams();
    console.log(srvcid);
    return (
        <div className='servicepage'>
            <Navbar />

            {/* FOR C&I */}

            {srvcid == "cai" ? (
                <div className="candi">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>SERVICES / C&I</h1>
                                <h1 className='bdbot'>C&I SERVICES</h1>
                            </div>
                        </div>
                        <img className='servicebanner' src='https://ik.imagekit.io/dexo68yudb/54405564-flat-line-design-website-banner-of-about-us-company-information-business-solutions-and-services-mode.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670577290482' alt="pjssr_about_header_img" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hastwocontsec">
                                <div className="hasleft">
                                    <p>We are specialized in C&I Erection and Commissioning, which includes all types of works in different applications and industries.</p>

                                    <h3>Erection :</h3>
                                    <br />
                                    <ul>
                                        <li>DCS / PLC Panels</li>
                                        <li>Fire Fighting & Access Control System</li>
                                        <li>Cable Tray Erection</li>
                                        <li>Cable Laying</li>
                                        <li>Glanding & Termination</li>
                                        <li>Impulse Pipe Tubing</li>
                                        <li>Different Type Of Transmitters</li>
                                        <li>Radar Type Level Transmitter</li>
                                        <li>Pressure Transmitter</li>
                                        <li>DP Transmitter</li>
                                        <li>Temperature Elements</li>
                                        <li>Mass Flow Meter</li>
                                        <li>Rotameters</li>
                                        <li>Level Switches</li>
                                        <li>PH & Conductivity Meter</li>
                                        <li>Digital Control Valves</li>
                                        <li>Metering Skids</li>
                                        <li>Fire & Gas Systems</li>
                                        <li>Analyzers</li>
                                        <li>MOV’s</li>
                                        <li>CCTV</li>
                                        <li>Office Automation</li>
                                    </ul>

                                    <h3>Commissioning :</h3>
                                    <br />
                                    <ul>
                                        <li>Cold and Hot Loop Checks</li>
                                        <li>Commissioning Assistance.</li>
                                    </ul>

                                    <h3>Operations & Maintenance :</h3>
                                    <br />

                                    <ul><li>Technical Manpower Support</li></ul>
                                </div>
                                <div className="hasright">
                                    <h3>Market Served</h3>
                                    <ul>
                                        <li>Power Generation Facilities</li>
                                        <li>Oil & Gas, Onshore, Offshore, and Subsea Industries</li>
                                        <li>Marine and Ship Building Industries</li>
                                        <li>Infrastructures and Construction Facilities</li>
                                        <li>Pharmaceutical and Petrochemical Industries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : srvcid === "elwr" ? (
                <div className="elwr">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>SERVICES / ELECTRICAL</h1>
                                <h1 className='bdbot'>ELECTRICAL SERVICES</h1>
                            </div>
                        </div>
                        <img className='servicebanner' src='https://ik.imagekit.io/dexo68yudb/54405564-flat-line-design-website-banner-of-about-us-company-information-business-solutions-and-services-mode.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670577290482' alt="pjssr_about_header_img" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hastwocontsec">
                                <div className="hasleft">
                                    <p>We are specialized in Electrical Erection and Commissioning, which includes all types of works in different applications and industries.</p>

                                    <h3>Erection :</h3>
                                    <br />
                                    <ul>
                                        <li>33KV/ 11KV / 440V Substation</li>
                                        <li>Transformers 0f 33KV/ 11KV / 440V</li>
                                        <li>33KV / 11kv  Breaker Panels</li>
                                        <li>PMCC & MCC</li>
                                        <li>Power and Control cables Laying and Termination</li>
                                        <li>HT Cable Jointing</li>
                                        <li>Motor Works</li>
                                        <li>Lighting Systems</li>
                                        <li>UPS</li>
                                        <li>Air Conditioner</li>
                                    </ul>

                                    <h3>Commissioning :</h3>
                                    <br />
                                    <ul>
                                        <li>Power and Control cables Loop Checks</li>
                                        <li>Commissioning Assistance</li>

                                    </ul>

                                    <h3>Operations & Maintenance :</h3>
                                    <br />

                                    <ul><li>Technical Manpower Support</li></ul>
                                </div>
                                <div className="hasright">
                                    <h3>Market Served</h3>
                                    <ul>
                                        <li>Power Generation Facilities</li>
                                        <li>Oil & Gas, Onshore, Offshore, and Subsea Industries</li>
                                        <li>Marine and Ship Building Industries</li>
                                        <li>Infrastructures and Construction Facilities</li>
                                        <li>Pharmaceutical and Petrochemical Industries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : srvcid === "mhwr" ? (
                <div className="mhwr">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>SERVICES / MECHANICAL</h1>
                                <h1 className='bdbot'>MECHANICAL SERVICES</h1>
                            </div>
                        </div>
                        <img className='servicebanner' src='https://ik.imagekit.io/dexo68yudb/54405564-flat-line-design-website-banner-of-about-us-company-information-business-solutions-and-services-mode.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670577290482' alt="pjssr_about_header_img" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hastwocontsec">
                                <div className="hasleft">
                                    <p>We are specialized in Mechanical Erection and Commissioning, which includes all types of works in different applications and industries.</p>

                                    <h3>Erection :</h3>
                                    <br />
                                    <ul>
                                        <li>Turbine, generator & condenser</li>
                                        <li>TDBFP</li>
                                        <li>MDBFP</li>
                                        <li>Pumps</li>
                                        <li>PUMP’s – CEP, ACW, DMCW, COMPRESSOR</li>
                                        <li>VACUUM PUMP</li>
                                        <li>COAL MILL, FD FAN, ID FAN & PA FAN</li>
                                    </ul>

                                    <h3>Commissioning :</h3>
                                    <br />
                                    <ul>
                                        <li>Commissioning Assistance</li>
                                    </ul>

                                    <h3>Operations & Maintenance :</h3>
                                    <br />

                                    <ul><li>Technical Manpower Support</li></ul>
                                </div>
                                <div className="hasright">
                                    <h3>Market Served</h3>
                                    <ul>
                                        <li>Power Generation Facilities</li>
                                        <li>Oil & Gas, Onshore, Offshore, and Subsea Industries</li>
                                        <li>Marine and Ship Building Industries</li>
                                        <li>Infrastructures and Construction Facilities</li>
                                        <li>Pharmaceutical and Petrochemical Industries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : srvcid === "ohsr" ? (
                <div className="ohsr">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>SERVICES / OTHER</h1>
                                <h1 className='bdbot'>OTHER SERVICES</h1>
                            </div>
                        </div>
                        <img className='servicebanner' src='https://ik.imagekit.io/dexo68yudb/54405564-flat-line-design-website-banner-of-about-us-company-information-business-solutions-and-services-mode.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670577290482' alt="pjssr_about_header_img" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hastwocontsec">
                                <div className="hasleft">
                                    <ul>
                                        <li>Piping construction:</li>
                                        <li>We are specialized in piping fabrication and erection, which includes all types of piping works (Carbon Steel, Stainless Steel 304, 316, 316L and Duplex Material) in different applications and industries e.g. Hydraulic Piping System, Turret piping System and etc.</li>
                                        <li>Pressure Testing</li>
                                        <li>Painting & Coating</li>
                                        <li>All types of insulations</li>
                                        <li>Engineering works</li>
                                    </ul>
                                </div>
                                <div className="hasright">
                                    <h3>Market Served</h3>
                                    <ul>
                                        <li>Power Generation Facilities</li>
                                        <li>Oil & Gas, Onshore, Offshore, and Subsea Industries</li>
                                        <li>Marine and Ship Building Industries</li>
                                        <li>Infrastructures and Construction Facilities</li>
                                        <li>Pharmaceutical and Petrochemical Industries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Errorpage />
            )}





            <Footer />
        </div>
    )
}

export default Servicepage