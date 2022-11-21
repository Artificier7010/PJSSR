import React from 'react';
import placeholdimg from '../../Assets/Images/placeholder-image.jpg';
import './newslist.scss';

const Newslist = (props) => {
    let data=props.listitems;
  return (
    <div className='newslist'>
        {data.map((listitem,indx)=>{
            return(
                <div key={indx} className="newslist-card">
                    <div className="news-thumb">
                        <img src={placeholdimg} alt="placehold"/>
                    </div>
                    <h1 className="neslst-head">{listitem.title.length>40 ?listitem.title.slice(0,40)+"..." :listitem.title }</h1>
                    <div className="date-time">{listitem.date}&nbsp;|&nbsp;{listitem.time}&nbsp;|&nbsp;{listitem.category}</div>
                    <a href="read/more">Read More</a>

                </div>
            )
        })}

    </div>
  )
}

export default Newslist