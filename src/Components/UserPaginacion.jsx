import { useEffect, useState, useRef } from "react";
import { Card } from "antd";
import { fetchGetProducts } from "../Service/api.js";
import '../index.css';
import {fetchCartAddItem} from "../Service/cart_api.js";
import {useNavigate} from "react-router-dom";

export default function UserPaginacion() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(9);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null);
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetchGetProducts(skip, limit);
            const fetchedProducts = response.data.items;
            setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };
    const handleAddCart = async (itemId) => {
        try {
            const response = await fetchCartAddItem(itemId, userId);
            console.log('Item eliminado del carrito', response.data);
            loadCartItems();
        } catch (error) {
            console.error('Error al eliminar el item', error);
        }
    };
    const handleGetMore = (id) => {
        console.log("Obtener más productos");
        navigate(`/product/${id}`);

    }
    useEffect(() => {
        fetchProducts();
    }, [skip]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setSkip((prevSkip) => prevSkip + limit);
                }
            },
            { threshold: 1.0 }
        );
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loading]);

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {products.map((product,index) => (
                        <Card
                            key={index}
                            title={product.title}
                            cover={
                                <img
                                    alt="img"
                                    src={product.imgUrl}
                                    className="w-1/4 object-cover"
                                />
                            }
                        >
                            <p>Rating:{product.stars}</p>
                            <p>Price: ${product.price}</p>
                            <div className="flex space-x-4 justify-center">
                                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                                        onClick={() => handleGetMore(product.asin)}>Ver más
                                </button>
                                <button
                                    className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700">Agregar al
                                    carro
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
                <div ref={observerRef} className="h-8"></div>
                {loading && <p>Loading more products...</p>}
            </div>
        </div>
    );
}
