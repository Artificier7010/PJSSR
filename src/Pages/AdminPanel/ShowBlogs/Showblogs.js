import React, { useEffect, useState } from 'react';
import { FaPenFancy, FaPlusSquare, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { API } from '../../../Services/Api';
import './showblogs.scss';

const Showblogs = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await API.getPosts();

            if (response.isSuccess) {
                console.log(response.data);
                setAllPosts(response.data);
            }

        }
        fetchData()

    }, [])

    return (
        <div className='Showblogs'>
            <div className="show-blogs-wrap">
                <div className="shw-heading">
                    <h1>Created Blogs</h1>
                    <div className="btns">
                        <form action="">
                            <input type="text" />
                            <button type='submit'><FaSearch /></button>
                        </form>
                        <Link title='Add Post' to={'/admin/dash/createposts'}><FaPlusSquare /></Link>

                    </div>
                </div>

                <div className="created-blogs-section">
                    <div className="created-blogs">
                        <div className="blog-post">
                            {allPosts && allPosts.length > 0 ? allPosts.map((post,index) => {
                                return (
                                    <a href='/PJSSR/admin/dash/blogs' className="blog-card">
                                        <img src={post.picture ? post.picture : "https://ik.imagekit.io/dexo68yudb/No_Pic_Added.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678054229672"} alt="posted" />
                                        <div className="bcard-details">
                                            <div className="badge-wrap">
                                                <span className="badge">{post.category}</span>
                                                <Link><FaPenFancy /></Link>
                                            </div>
                                            <h1>{post.title.length <=20 ? post.title : post.title.slice(0,19)+"..."}</h1>
                                            <p>{post.description.length <=20 ? post.description : post.description.slice(0,20)+"..."}</p>
                                        </div>
                                    </a>
                                )
                            }) : (
                                <p className='no-data-msg' style={{textAlign:"Center"}}>No Posts Available</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Showblogs