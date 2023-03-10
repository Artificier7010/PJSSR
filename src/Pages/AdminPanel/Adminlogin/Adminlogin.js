import React, { useContext, useState } from 'react';
import './adminlogin.scss';
import logo from '../../../Assets/Images/logolight.png';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../Services/Api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Toaster from '../../../Components/toaster/Toaster';
import { DataContext } from '../../../Context/DataProvider';

const initialValues={
    email:"",
    password:""
}

const Adminlogin = ({setIsAuthenticated}) => {
    const [eyeOpen, setEyeOpen] = useState(true);
    const [formData,setFormData]=useState(initialValues);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [isLoading,setIsLoading]=useState(false);

    const {setAccount}=useContext(DataContext);


    const navigate=useNavigate();



    const handleInputChange=(ev)=>{
        const {name,value}=ev.target;
        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const handleLogIn=async(ev)=>{
        setIsLoading(true);
        ev.preventDefault();
        let response= await API.adminLogin(formData);
        console.log(response);

        if(response.isSuccess){

            setIsLoading(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 4000);
            setFormData(initialValues);
            sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
            setIsAuthenticated(true);
            await setAccount({username:response.data.data.name,email:response.data.data.email});
            navigate('/admin/dash/createposts');
        }else{
            setIsLoading(false);
            setShowError(true);
            setErrorMessage(response.msg.message);
            setTimeout(() => setShowError(false), 4000);
        }
    }
    return (
        <div className='Adminlogin'>
            <div className="adminlogin-wrap">
                <div className="adlog-left">
                    <div className="left-content">
                        <h1>Welcome Back</h1>
                        <p>Don't Have Account Yet ?</p>
                        <Link to={'/admin/create'}>Register</Link>
                    </div>
                </div>
                <div className="adlog-right">
                    <img src={logo} alt="PJSSR logo" width={200} />
                    <h1>SIGN IN</h1>
                    <form action="">
                        <div className="row">
                            <input value={formData.email} onChange={handleInputChange} type="email" placeholder='Email' name='email' />
                        </div>
                        <div className="row">
                        <div className="pass-input">
                                <input value={formData.password} onChange={handleInputChange} type={eyeOpen ? "password" : "text"} placeholder='Password' name='password' required />
                                <button onClick={(e) => { e.preventDefault(); setEyeOpen(!eyeOpen) }} className='eye-btn'>{eyeOpen ? <FaEye /> : <FaEyeSlash />}</button>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={handleLogIn} className='sgn-btn'>{isLoading ? <div className='thin-10'></div> : "Sign In"}</button>
                        </div>
                        {showSuccess && <Toaster message="Logined Successfully" type="success" />}
                        {showError && <Toaster message={errorMessage} type="error" />}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Adminlogin;