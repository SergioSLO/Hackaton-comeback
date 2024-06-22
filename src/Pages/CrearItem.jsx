import React, { useState } from 'react';
import {fetchCreateProduct} from "../Service/api.js";
import {useNavigate} from "react-router-dom";


const CrearItem = () => {
    const navigate = useNavigate();
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
            const response = await fetchCreateProduct(formData);
            console.log('Item created successfully', response.data);
            alert('Producto creado exitosamente');
            navigate("/home")
        } catch (error) {
            console.error('Error creating item', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Crear Producto</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Compras en el último mes
                        <input
                            type="number"
                            name="boughtInLastMonth"
                            value={formData.boughtInLastMonth}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        URL de la imagen
                        <input
                            type="text"
                            name="imgUrl"
                            value={formData.imgUrl}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <input
                            type="checkbox"
                            name="isBestSeller"
                            checked={formData.isBestSeller}
                            onChange={handleChange}
                            className="mr-2 h-4 w-4 bg-white text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        Best Seller
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Precio
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            step="0.01"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Estrellas
                        <input
                            type="number"
                            name="stars"
                            value={formData.stars}
                            onChange={handleChange}
                            min="0"
                            max="5"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Nombre del producto
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </label>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Crear Producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CrearItem;
