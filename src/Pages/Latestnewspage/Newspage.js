import React, { useEffect } from 'react';
import './newspage.scss';
import Navbar from '../../Components/navbar/Navbar'
import Gridview from '../../Components/gridview/Gridview';
import Footer from '../../Components/footer/Footer';
import { Link } from 'react-router-dom';

const Newspage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    let dumdata = [
        {
            title: "First Post me kya kya likh sakte hai bhai bata na yaar aisa mat kar yaar",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Second Post fuyf fuyf fguyfuy f8f8g8g8i7g ggg89 g98g99gh9h8 9h98h98h09j gh89g89hg98h98h9h fgf8f86",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Third Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Fourth Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Fourth Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Fourth Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Fourth Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
        {
            title: "Fourth Post",
            date: "21/07/2000",
            time: "8:55",
            category: "Technology",
            img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320"
        },
    ]
    return (
        <div className='Newspage'>
            {/* navbar */}
            <Navbar />

            {/* Header */}

            <div className="newspage-header">
                <div className="overlay">
                    <div className="over-content">
                        <h1>Latest News</h1>
                        <h2>Catch The Latest</h2>
                    </div>
                </div>
            </div>

            <div className="category-list">
                <div className="cat-menu">
                    <h3>Filter</h3>
                    <Link to={'/'} >Technology</Link>
                    <Link to={'/'} >Data</Link>
                    <Link to={'/'} >Power</Link>
                    <Link to={'/'} >Loaded</Link>
                    <Link to={'/'} >Oil</Link>
                </div>
            </div>


            {/* Featured  */}
            <div className="newspage-list">
                <div className="featured">
                    <div className="feat-wrap">
                        <h1>Featured</h1>
                        <hr color='gray' />

                        <div className="feat-card-wrap">
                            <Gridview
                            postData={dumdata}
                            />
                        </div>
                    </div>
                </div>
            </div>



            <Footer/>
        </div>
    )
}

export default Newspage