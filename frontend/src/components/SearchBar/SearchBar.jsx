import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { menu_list, food_list } from '../../assets/assets';

const SearchBar = () => {
    const url = "http://localhost:4000";
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='search-bar-container'>
            <div className="input-wrapper">
                <input 
                    placeholder="Type Your Food..." 
                    type='text' 
                    onChange={(event) => setSearchTerm(event.target.value)} 
                />
                <button>
                    <FaSearch id='search-icon' />
                </button>
            </div>

            <div className="menu_list">
                {menu_list.map((val) => (
                    <div key={val.menu_name} className="menu-item">
                        <div className="menu-item-list">
                            <img src={val.menu_image} alt={val.menu_name} />
                            <p>{val.menu_name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="template_container">
                {food_list.filter((val) => {
                    if (searchTerm === "") {
                        return true;
                    }
                    return val.name.toLowerCase().includes(searchTerm.toLowerCase());
                }).map((val) => (
                    <div className='food-items' key={val._id}>
                        {searchTerm === "" ? "" : 
                            <div className='items-show'>
                                <div className="food-item-img-container">
                                    <img className='food-item-img' src={val.image} alt={val.name} />
                                </div>
                                <div className="food-item-name">
                                    <p>{val.name}</p>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
