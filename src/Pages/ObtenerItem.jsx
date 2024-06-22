import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchGetProduct} from "../Service/api.js";

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await fetchGetProduct(id);
                setItem(response.data);
            } catch (error) {
                console.error('Error al obtener el item', error);
            }
        };
        getItem();
    }, [id]);

    if (!item) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.imgUrl} alt={item.title} />
            <p>Precio: ${item.price}</p>
            <p>Estrellas: {item.stars}</p>
            <p>Compras en el último mes: {item.boughtInLastMonth}</p>
            <p>{item.isBestSeller ? 'Best Seller' : ''}</p>
        </div>
    );
};

export default ItemDetails;
