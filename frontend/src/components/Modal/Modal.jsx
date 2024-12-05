// import React, { useContext, useRef, useState } from 'react';
// import './Modal.css';
// import { X } from 'lucide-react';
// import { StoreContext } from '../../context/StoreContext';

// const Modal = ({ onClose }) => {
//     const { cartItems, addToCart, removeFromCart, url, food_list } = useContext(StoreContext);
//     const modalRef = useRef();

//     // Close modal when clicking outside content
//     const closeModal = (e) => {
//         if (modalRef.current === e.target) {
//             onClose();
//         }
//     };

//     // State to track which item is selected for popup
//     const [itemPopup, setItemPopup] = useState("");

//     // Handle click to select item
//     const handleItemClick = (itemId) => {
//         setItemPopup(itemId); // Update state to show details of selected item
//     };



//     // Find the selected item based on itemPopup
//     const selectedItem = food_list.find(item => item._id === itemPopup);

//     return (
//         <div ref={modalRef} onClick={closeModal} className='modal'>
//             <div className='content'>
//                 <div className='head'>
//                     <h1>Item Details</h1>
//                     <button onClick={onClose}><X /></button>
//                 </div>

//                 {/* Display the list of items to select from */}
//                 <div className="food-list">
//                     {/* {food_list.map((val) => (
//                         <div key={val._id} onClick={() => handleItemClick(val._id)} className="food-item-card">
//                             <img className='food-item-img' src={url + "/images/" + val.image} alt={val.name} />
//                             <p>{val.name}</p>
//                             <p>&#8377; {val.price}</p>
//                         </div>
//                     ))} */}
//                 </div>

//                 {/* Conditionally render the selected item details */}
//                 {selectedItem && (
//                     <div className="item-popup-details">
//                         <div key={selectedItem._id} className="item-details">
//                             <h2>{selectedItem.name}</h2>
//                             <img className='food-item-img' src={url + "/images/" + selectedItem.image} alt={selectedItem.name} />
//                             <p>{selectedItem.description}</p>
//                             <p><strong>Price: &#8377; {selectedItem.price}</strong></p>
//                             <div className="food-item-controls">
//                                 <button onClick={() => addToCart(selectedItem._id)}>Add to Cart</button>
//                                 <button onClick={() => removeFromCart(selectedItem._id)}>Remove from Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <a href="/cart"><button>Go to Cart</button></a>
//             </div>
//         </div>
//     );
// };

// export default Modal;
