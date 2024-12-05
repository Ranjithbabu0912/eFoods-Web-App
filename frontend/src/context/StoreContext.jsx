import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "https://efoods-web-app-backend.onrender.com";
    const [token, setToken] = useState(""); 
    const [food_list, setFoodList] = useState([]);

    const getItemId = (itemId) => {
        return itemId._id || itemId;
    };

    const addToCart = async (itemId) => {
        const id = getItemId(itemId); 
        setCartItems((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId: id }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        const id = getItemId(itemId); 
        setCartItems((prev) => {
            const newCount = prev[id] - 1;
            if (newCount <= 0) {
                const { [id]: _, ...rest } = prev; 
                return rest;
            }
            return { ...prev, [id]: newCount };
        });
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId: id }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    };

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData || {});
        } catch (error) {
            console.error("Failed to load cart data:", error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        };
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        fetchFoodList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
