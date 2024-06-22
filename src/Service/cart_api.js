// Let us begin

import axios from "axios";
import {url} from "./api.js";
import {header} from "./api.js";

// Cart operations = = = = = = = = = =

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
export const fetchCartAddItem = async (itemID, userID) => { // This takes itemID and userID
    const data = {itemID, userID}; // Should be formated
    console.log("Adding item to cart . . .")
    const response = await axios.post(`${url}/cart`, data, header());
    console.log(`Item data: ${response}`); // Check data
    return response;
}

// DELETE /cart
export const fetchCartDeleteItem = async (itemID, userID) => { // This takes itemID and userID
    const data = {itemID, userID}; // Should be formated
    console.log("Deleting item from cart . . .")
    const response = await axios.delete(`${url}/cart`, data, header());
    console.log(`Item data for [${data}]: ${response}`); // Check data
    return response;
}

// GET /cart/{userId}
export const fetchCart = async (userId)=> {
    const data = {userId};
    const route = `cart/${userId}`; // Route denotation
    console.log("Fetching cart contents . . .")
    console.log(`TARGET: [${userId}]`)
    const response = await axios.get(`${url}/${route}`,data , header());
    console.log(`Item data: ${response}`); // Check data
    return response;
}