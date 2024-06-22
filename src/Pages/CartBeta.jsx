import React, { useState, useEffect, useCallback } from 'react';
import { fetchCart, fetchCartAddItem, fetchCartDeleteItem, fetchCartBuy } from '../Service/cart_api.js';

/**
 * Cart Component
 * This component handles the display and management of the user's shopping cart.
 */
const Cart = () => {
    // State to hold the items in the cart
    const [cartItems, setCartItems] = useState([]);
    // State to manage the loading state for async operations
    const [loading, setLoading] = useState(false);
    // State to manage error messages
    const [error, setError] = useState('');
    // Retrieve the user ID from local storage
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

    // useEffect hook to load cart items when the component mounts
    useEffect(() => {
        loadCartItems();
    }, []);

    /**
     * Function to load the items in the user's cart
     * This function fetches the cart items from the server and updates the state
     */
    const loadCartItems = useCallback(async () => {
        setLoading(true); // Set loading state to true
        setError(''); // Clear any existing errors
        try {
            const response = await fetchCart(userId); // Fetch cart items
            setCartItems(response.data); // Update the cart items state
        } catch (error) {
            console.error('Error loading cart', error); // Log error to console
            setError('Error loading cart'); // Set error message
        }
        setLoading(false); // Set loading state to false
    }, [userId]);

    /**
     * Function to handle adding an item to the cart
     * This function sends a request to add an item to the cart and reloads the cart items
     * @param {string} itemId - The ID of the item to add
     */
    const handleAddItem = useCallback(async (itemId) => {
        setLoading(true); // Set loading state to true
        setError(''); // Clear any existing errors
        try {
            const response = await fetchCartAddItem(itemId, userId); // Add item to cart
            console.log('Item added to cart', response.data); // Log success message
            loadCartItems(); // Reload cart items
        } catch (error) {
            console.error('Error adding item', error); // Log error to console
            setError('Error adding item'); // Set error message
        }
        setLoading(false); // Set loading state to false
    }, [userId, loadCartItems]);

    /**
     * Function to handle deleting an item from the cart
     * This function sends a request to delete an item from the cart and reloads the cart items
     * @param {string} itemId - The ID of the item to delete
     */
    const handleDeleteItem = useCallback(async (itemId) => {
        setLoading(true); // Set loading state to true
        setError(''); // Clear any existing errors
        try {
            const response = await fetchCartDeleteItem(itemId, userId); // Delete item from cart
            console.log('Item deleted from cart', response.data); // Log success message
            loadCartItems(); // Reload cart items
        } catch (error) {
            console.error('Error deleting item', error); // Log error to console
            setError('Error deleting item'); // Set error message
        }
        setLoading(false); // Set loading state to false
    }, [userId, loadCartItems]);

    /**
     * Function to handle the purchase of items in the cart
     * This function sends a request to purchase the items in the cart and clears the cart on success
     */
    const handleBuy = useCallback(async () => {
        setLoading(true); // Set loading state to true
        setError(''); // Clear any existing errors
        try {
            const response = await fetchCartBuy(userId); // Buy items in cart
            console.log('Purchase successful', response.data); // Log success message
            setCartItems([]); // Clear the cart items state
        } catch (error) {
            console.error('Error making purchase', error); // Log error to console
            setError('Error making purchase'); // Set error message
        }
        setLoading(false); // Set loading state to false
    }, [userId]);

    // Conditional rendering for loading state
    if (loading && !cartItems.length) {
        return <p>Loading...</p>;
    }

    // Conditional rendering for error state
    if (error) {
        return <p>{error}</p>;
    }

    // Conditional rendering for empty cart
    if (!cartItems.length) {
        return <p>The cart is empty.</p>;
    }

    // Render the cart items and actions
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.itemId}>
                        {item.title} - ${item.price} - Quantity: {item.qty}
                        <button onClick={() => handleDeleteItem(item.itemId)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleBuy} disabled={loading}>
                {loading ? 'Processing...' : 'Buy'}
            </button>
        </div>
    );
};

export default Cart;

