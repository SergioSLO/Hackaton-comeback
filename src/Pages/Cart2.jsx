// src/Pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import {fetchCart, fetchCartAddItem, fetchCartBuy, fetchCartDeleteItem} from "../Service/cart_api.js";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const userId = localStorage.getItem('userId'); // Suponiendo que guardas el userId en el localStorage

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try {
            const response = await fetchCart(userId);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error al cargar el carrito', error);
        }
    };

    const handleAddItem = async (itemId) => {
        try {
            const response = await fetchCartAddItem(itemId, userId);
            console.log('Item añadido al carrito', response.data);
            loadCartItems();
        } catch (error) {
            console.error('Error al añadir el item', error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        try {
            const response = await fetchCartDeleteItem(itemId, userId);
            console.log('Item eliminado del carrito', response.data);
            loadCartItems();
        } catch (error) {
            console.error('Error al eliminar el item', error);
        }
    };

    const handleBuy = async () => {
        setLoading(true);
        try {
            const response = await fetchCartBuy(userId);
            console.log('Compra realizada con éxito', response.data);
            setCartItems([]);
        } catch (error) {
            console.error('Error al realizar la compra', error);
        }
        setLoading(false);
    };

    if (!cartItems.length) {
        return <p>El carrito está vacío.</p>;
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.itemId}>
                        {item.title} - ${item.price} - Cantidad: {item.qty}
                        <button onClick={() => handleDeleteItem(item.itemId)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleBuy} disabled={loading}>
                {loading ? 'Procesando...' : 'Comprar'}
            </button>
        </div>
    );
};

export default Cart;