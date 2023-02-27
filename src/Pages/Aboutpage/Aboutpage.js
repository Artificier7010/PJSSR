import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/footer/Footer';
import Navbar from '../../Components/navbar/Navbar';
import './aboutpage.scss';

const Aboutpage = () => {
    let { abtid } = useParams();
    return (
        <div className='aboutpage'>
            <Navbar />

            {abtid === "hsap" ? (
                <div className="healthandsaftey">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>ABOUT / HEALTH AND SAFTEY</h1>
                                <h1 className='bdbot'>Health & Saftey Policy</h1>
                            </div>
                        </div>
                        <img className='aboutbanner' src='https://ik.imagekit.io/dexo68yudb/scott-graham-OQMZwNd3ThU-unsplash__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669824398232' alt="pjssr_about_header_img" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hascontsec">
                                <div className="hasleft">
                                    <p>At <b> PJSSR</b>, we strive to ensure that our products and services meet the highest standards of health and safety, and that our employees are working in a safe and healthy environment. We recognize our responsibility to continuously strive for improvement in our health and safety processes and procedures in order to minimize risk and ensure the safety of our employees and customers. We are committed to adhering to all applicable laws and regulations, and to providing our employees with the training and resources they need to work safely. We are dedicated to the ongoing development of a Total Safety Culture across the organization, and to the identification and mitigation of hazards to ensure the safety of our workplace.</p>
                                    <ol>
                                        <li>Ensuring that appropriate equipment, tools and working environment are provided to all employees to enable them to work safely and efficiently.</li>
                                        <li> Involve employees in the identification of potential hazards and its corrective actions.</li>
                                        <li>Regularly review and update the health and safety policy to meet the challenges of changing environment.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            ) : (
                <div className="environmental">
                    <div className="hasheader">
                        <div className="overlay">
                            <div className="banner-det">
                                <h1 className='bdtop'>ABOUT / ENVIRONMENTAL</h1>
                                <h1 className='bdbot'>Environmental Policy</h1>
                            </div>
                        </div>
                        <img className='aboutbanner' src='https://ik.imagekit.io/dexo68yudb/scott-graham-OQMZwNd3ThU-unsplash__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669824398232' alt="" />
                    </div>

                    <div className="hascontent">
                        <div className="our-center-container">
                            <div className="hascontsec">
                                <div className="hasleft">
                                    <p>PJSSR is committed to compliance with all applicable environmental legislation, regulations and standards in all the countries and communities in which it operates.</p>

                                    <p>PJSSR is committed to providing its employees with the necessary training and education to ensure that they are aware of their responsibilities with respect to the environment.</p>

                                    <p>PJSSR is committed to implementing and maintaining an Environmental Management System (EMS) to incorporate a continuous improvement cycle of planning, implementing, monitoring, reviewing, and improving its environmental performance.</p>

                                    <p>PJSSR is committed to improving the working environment for our employees and in general for the community we live in. We have put in place a number of procedures to deal with environmental issues affecting our business activities such as:</p>
                                    <ol>
                                        <li>Waste minimization and control</li>
                                        <li>Energy efficiency</li>
                                        <li>Recycling</li>
                                        <li>Pollution prevention</li>
                                        <li>Reduction of resource consumption</li>
                                        <li>Environmental Policy</li>
                                        <li>PJSSR acknowledges the social responsibilities needed to address environmental issues relating to its operations.</li>
                                    </ol>

                                    <p>PJSSR is committed to identifying the environmental aspects and the impacts of its operations and ensuring that such impacts, if any, are reduced by means of mitigation, or simply, the use of alternative practices where appropriate.</p>

                                    <p>PJSSR recognizes its duty of care requirements with respect to the management of waste</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            )}


            <Footer />
        </div>
    )
}

export default Aboutpage