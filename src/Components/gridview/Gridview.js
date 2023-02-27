import React from 'react';
import { Link } from 'react-router-dom';
import './gridview.scss';

const Gridview = (props) => {
    return (
        <div className='Gridview'>
            <div className="grid-container">
                {props.postData.map((posts, index) => {
                    return (
                        <Link to={'/latestnews/#'} className="grid-item">
                            <div className="img-box">
                                <img src={posts.img} alt="postimg" />
                            </div>
                            <div className="grid-card-content">
                                <h3>{posts.category}</h3>
                                <h1>{posts.title.length>30 ? posts.title.slice(0,30)+"..." :posts.title}</h1>
                            </div>


                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Gridview