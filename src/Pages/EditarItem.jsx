import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchGetProduct, fetchPutProduct, fetchDeleteProduct } from '../Service/api';

export default function EditarItem() {
    const { id } = useParams(); // Accede al parámetro de ruta
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        itemId: id,
        boughtInLastMonth: 0,
        imgUrl: '',
        isBestSeller: false,
        price: 0.0,
        stars: 0,
        title: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchGetProduct(id);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetchPutProduct(id, product);
            alert('Product updated successfully');
            navigate('/home');
        } catch (error) {
            alert('Error updating product');
            setError(error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetchDeleteProduct(id);
            alert('Product deleted successfully');
            navigate('/home');
        } catch (error) {
            alert('Error deleting product');
            setError(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Edit Item</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imgUrl"
                        value={product.imgUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Bought In Last Month:
                    <input
                        type="number"
                        name="boughtInLastMonth"
                        value={product.boughtInLastMonth}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Stars:
                    <input
                        type="number"
                        name="stars"
                        value={product.stars}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Best Seller:
                    <input
                        type="checkbox"
                        name="isBestSeller"
                        checked={product.isBestSeller}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Update Product</button>
                <button type="button" onClick={handleDelete}>Delete Product</button>
                <button type="button" onClick={() => navigate('/home')}>Go to Home</button>
            </form>
        </div>
    );
}