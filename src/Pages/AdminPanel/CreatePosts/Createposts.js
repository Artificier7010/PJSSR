import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import './createpost.scss';


const initialValues={
    title:"",
    description:"",
    picture:"",
    username:"",
    category:"",
}

const Createposts = () => {
    const [postData,setPostData]=useState(initialValues);
    let url = "https://ik.imagekit.io/dexo68yudb/blog-header-creative-banner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676706548668";
    return (
        <div className='Createposts'>
            <div className="crt-post-wraper">
                <h1 >Add Post</h1>
                <hr />
                <form action="">
                    <div className="img-show-wrap">
                        <div className="show-wrap-left">
                            <img src={url} alt="pjssr post" />
                            <label className='file-btn' htmlFor="chooseimg">
                                Choose Or Drop Image Here&nbsp;<FaPlusSquare/>
                                <input type="file" id='chooseimg' style={{ display: "none" }} />
                            </label>
                        </div>
                        <div className="show-wrap-right">
                            <div className="row">
                                <input type="text" placeholder='Post Title' />
                            </div>
                            <div className="row">
                                <select name="category" id="">
                                    <option value="">Technology</option>
                                    <option value="">Mining</option>
                                    <option value="">Construction</option>
                                    <option value="">Powerplant</option>
                                    <option value="">Roadways</option>
                                    <option value="">Oil Generation</option>
                                </select>
                            </div>
                            <div className="row-wo-he">
                                <textarea placeholder='Write The Content, Enclose text with <b></b> for bold text and add <br/> for next line ' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="row">
                                <button className='pub-btn'>Publish</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createposts