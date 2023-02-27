import React, { useState } from 'react';
import './createadmin.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../../Assets/Images/logolight.png';
import { Link } from 'react-router-dom';
import { API } from '../../../Services/Api';
import Toaster from '../../../Components/toaster/Toaster';


const staticFormData = {
    name: "",
    email: "",
    pass: ""
}

const Createadmin = () => {

    const [eyeOpen, setEyeOpen] = useState(true);
    const [confrmpass, setConfrmPass] = useState("");
    const [formData, setFormData] = useState(staticFormData);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [isLoading,setIsLoading]=useState(false);


    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        if (name === "confrmpass") {
            setConfrmPass(value);
        }

        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })
    }

    const handleSubmit = async (ev) => {
        setIsLoading(true);
        ev.preventDefault();
        let response = await API.adminSignup(formData);
        console.log(response);
        if (response.isSuccess) {
            setIsLoading(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 4000);
            setFormData(staticFormData);
            setConfrmPass('');

            // Navigate to Login page


        } else {
            setIsLoading(false);
            setShowError(true);
            setErrorMessage(response.msg.message);
            setTimeout(() => setShowError(false), 4000);
        }
    }

    return (
        <div className='Createadmin'>
            <div className="creat-admin-wrap">
                <div className="admin-wrapleft">
                    <img src={logo} alt="pjssr-logo" width={200} />
                    <h1>Create Account</h1>
                    <form action="">
                        <div className="row">
                            <input value={formData.name} onChange={handleInputChange} type="text" placeholder='Full Name' name='name' required />
                        </div>

                        <div className="row">
                            <input value={formData.email} onChange={handleInputChange} type="email" placeholder='Email' name='email' required />
                        </div>

                        <div className="row">
                            <div className="pass-input">
                                <input value={formData.pass} onChange={handleInputChange} type={eyeOpen ? "password" : "text"} placeholder='Password' name='pass' required />
                                <button onClick={(e) => { e.preventDefault(); setEyeOpen(!eyeOpen) }} className='eye-btn'>{eyeOpen ? <FaEye /> : <FaEyeSlash />}</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="pass-input">
                                <input value={confrmpass} onChange={handleInputChange} type={eyeOpen ? "password" : "text"} placeholder='Confirm Password' name='confrmpass' required />
                                <button onClick={(e) => { e.preventDefault(); setEyeOpen(!eyeOpen) }} className='eye-btn'>{eyeOpen ? <FaEye /> : <FaEyeSlash />}</button>
                            </div>
                        </div>

                        <div className="row">
                            <button onClick={handleSubmit} className='reg-btn'>{isLoading? (<div className='thin-10'></div>) : "Register Admin"}</button>
                        </div>
                        {showSuccess && <Toaster message="Admin Registered Successfully" type="success" />}
                        {showError && <Toaster message={errorMessage} type="error" />}
                    </form>
                </div>
                <div className="admin-wrapright">
                    <div className="right-content">
                        <h1>Create Account</h1>
                        <p>Already Have An Account ?</p>
                        <Link to={'/admin'}>Sign In</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Createadmin