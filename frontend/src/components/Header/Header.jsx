import React from 'react'
import './Header.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu'

const Header = () => {
    return (
        <div className='header'>
            <hr />
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary expertise, Our mission is to satisfy your carvings and elevate your dining experience, one delicious meel at a time.</p>
                <a href="#explore-menu"><button>View Menu</button></a>
            </div>
        </div>
    ) 
}

export default Header