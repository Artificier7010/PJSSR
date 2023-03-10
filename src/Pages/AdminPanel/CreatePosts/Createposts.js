import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import './createpost.scss';
import { DataContext } from '../../../Context/DataProvider';
import { API } from '../../../Services/Api';
import { UPLOAD_API } from '../../../Services/Uploadingapi';


const initialValues={
    title:"",
    description:"",
    picture:"",
    username:"",
    category:"",
}

const Createposts = () => {
    const [postData,setPostData]=useState(initialValues);
    const [imageFile,setImageFile]=useState('');
    const [imageUrl,setImageUrl]=useState('https://ik.imagekit.io/dexo68yudb/Black_Minimalist_Quote_Instagram_Post.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677790805602');
    
    const {account}=useContext(DataContext);
    const navigate=useNavigate();
    
    useEffect(()=>{
        
        const getImage=async()=>{
            if(imageFile){
                let data=new FormData();
                data.append("file",imageFile);
                data.append("name",imageFile.name);

                // API CALL
                console.log(data.get("name"));
                console.log(data.get("file"));

                const response=await UPLOAD_API.uploadImage(data);
                console.log("res.data",response.data);
                postData.picture=await response.data
                setImageUrl(postData.picture);
            }
        }
        getImage();
        console.log("postdta",postData.picture);
        postData.username=account.username || 'Animesh';
    },[imageFile])



    const handleInputChange=(ev)=>{
        let {name,value}=ev.target;

        setPostData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })


    }

    const savePost=async(ev)=>{
        ev.preventDefault();
        const response=await API.createPost(postData);

        if(response.isSuccess){
            navigate('/admin/dash/blogs');
        }else{
            
        }


    }







    return (
        <div className='Createposts'>
            <div className="crt-post-wraper">
                <h1 >Add Post</h1>
                <hr />
                <form encType='multipart/form-data'>
                    <div className="img-show-wrap">
                        <div className="show-wrap-left">
                            <img src={imageUrl} alt="pjssr post" />
                            <label className='file-btn' htmlFor="chooseimg">
                                Choose Or Drop Image Here&nbsp;<FaPlusSquare/>
                                <input onChange={(e)=>setImageFile(e.target.files[0])} type="file" id='chooseimg' style={{ display: "none" }} />
                            </label>
                        </div>
                        <div className="show-wrap-right">
                            <div className="row">
                                <input onChange={handleInputChange}  type="text" placeholder='Post Title' name='title' required />
                            </div>
                            <div className="row">
                                <select onChange={handleInputChange} name="category" >
                                    <option disabled hidden selected >Select Category</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Mining">Mining</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Powerplant">Powerplant</option>
                                    <option value="Roadways">Roadways</option>
                                    <option value="Oil Generation">Oil Generation</option>
                                </select>
                            </div>
                            <div className="row-wo-he">
                                <textarea onChange={handleInputChange} placeholder='Write The Content, Enclose text with <b></b> for bold text and add <br/> for next line ' name="description"  cols="30" rows="10"></textarea>
                            </div>
                            <div className="row">
                                <button onClick={savePost} className='pub-btn'>Publish</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createposts;