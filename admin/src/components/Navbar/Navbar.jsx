import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>eCaterer.</h1>
                <p>Admin Panal</p>
            </div>
            <img className='profile' src={assets.profile_image} alt="profile pic" />
        </div>
    )
}

export default Navbar