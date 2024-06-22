import React, { useState, useEffect, useCallback } from 'react';
import { fetchCart, fetchCartAddItem, fetchCartDeleteItem, fetchCartBuy } from '../api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetchCart(userId);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error loading cart', error);
            setError('Error loading cart');
        }
        setLoading(false);
    }, [userId]);

    const handleAddItem = useCallback(async (itemId) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetchCartAddItem(itemId, userId);
            console.log('Item added to cart', response.data);
            loadCartItems();
        } catch (error) {
            console.error('Error adding item', error);
            setError('Error adding item');
        }
        setLoading(false);
    }, [userId, loadCartItems]);

    const handleDeleteItem = useCallback(async (itemId) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetchCartDeleteItem(itemId, userId);
            console.log('Item deleted from cart', response.data);
            loadCartItems();
        } catch (error) {
            console.error('Error deleting item', error);
            setError('Error deleting item');
        }
        setLoading(false);
    }, [userId, loadCartItems]);

    const handleBuy = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetchCartBuy(userId);
            console.log('Purchase successful', response.data);
            setCartItems([]);
        } catch (error) {
            console.error('Error making purchase', error);
            setError('Error making purchase');
        }
        setLoading(false);
    }, [userId]);

    if (loading && !cartItems.length) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!cartItems.length) {
        return <p>The cart is empty.</p>;
    }

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
