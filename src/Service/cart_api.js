// Let us begin

import axios from "axios";
import {header} from "./api.js";

// Cart operations = = = = = = = = = =
 const url = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

// POST /buy
export const fetchCartBuy = async (userId) => { // This takes only the userID
    const data = {userId}; // Should be formated
    console.log("Executing buy operation . . .")
    const response = await axios.post(`${url}/buy`, data, header());
    console.log(`Operation line for [${data}]: ${response.status}`); // Point
    console.log(response); // Data
    return response;
}

// POST /cart
export const fetchCartAddItem = async (itemId, userId) => { // This takes itemID and userID
    const data = { itemId, userId }; // Should be formated
    const token = localStorage.getItem('token'); // Acquire token
    const config = {headers: {Authorization : `Bearer ${token}`}};
    console.log("Adding item to cart . . .")
    const response = await axios.put(`${url}/cart`, data, config);
    console.log(`Item data: ${response}`);
    return response;
}

// DELETE /cart
export const fetchCartDeleteItem = async (itemId, userId) => { // This takes itemId and userID
    const data = {itemID: itemId, userId}; // Should be formated
    console.log("Deleting item from cart . . .")
    const response = await axios.delete(`${url}/cart`, {data, ...header()});
    console.log(`Item data for [${data}]: ${response}`); // Check data
    return response;
}

// GET /cart/{userId}
export const fetchCart = async (userId)=> {
    const route = `cart/${userId}`; // Route denotation
    console.log("Fetching cart contents . . .")
    console.log(`TARGET: [${userId}]`)
    const response = await axios.get(`${url}/${route}`, header());
    console.log(response); // Check data
    return response;
}