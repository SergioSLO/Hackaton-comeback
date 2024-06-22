import React, { useState } from 'react';
import axios from 'axios';

const CrearItem = () => {
    const [formData, setFormData] = useState({
        boughtInLastMonth: 0,
        imgUrl: '',
        isBestSeller: false,
        price: 0.0,
        stars: 0,
        title: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/items', formData);
            console.log('Item created successfully', response.data);
        } catch (error) {
            console.error('Error creating item', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Compras en el último mes:
                <input
                    type="number"
                    name="boughtInLastMonth"
                    value={formData.boughtInLastMonth}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                URL de la imagen:
                <input
                    type="text"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Best Seller:
                <input
                    type="checkbox"
                    name="isBestSeller"
                    checked={formData.isBestSeller}
                    onChange={handleChange}
                />
            </label>
            <label>
                Precio:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                    required
                />
            </label>
            <label>
                Estrellas:
                <input
                    type="number"
                    name="stars"
                    value={formData.stars}
                    onChange={handleChange}
                    min="0"
                    max="5"
                    required
                />
            </label>
            <label>
                Nombre del producto:
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Crear Producto</button>
        </form>
    );
};

export default CrearItem;
