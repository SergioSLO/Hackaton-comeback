// Let us begin

import axios from "axios";
const url = 'https://dummyjson.com';

//este tiene s ProductSSSSS
export const fetchGetProducts = async (skip, limit) => {
    const config = {
        params:{
            limit,
            skip,
        }
    }
    const response = await axios.get(`${url}/products`, config)
    console.log("FetchResult")
    console.log(response)
    return response;
}
//real
const conver = (data) => {
    const precio = Number(data.price)
    const cantidad = Number(data.quantity)
    return(
        {...data,
            price:precio,
            quantity:cantidad,
        }
    )
}

const header = () => {
    const token = localStorage.getItem('token');
    return {headers: {Authorization : `Bearer ${token}`}};
}

const paginacion = (skip, limit) => {
    let config = header();
    config = {
        ...config,
        params:{
            skip,
            limit
        }
    };
    return config;
}

export const fetchLogIn = async (body) => {
    const response = await axios.post(`${url}/api/auth/login`,body)
    console.log("LogInResponse")
    console.log(response)
    return response;
}
export const fetchRegister = async (body) => {
    const response = await axios.post(`${url}/api/auth/register`,body)
    console.log("RegisterResponse")
    console.log(response)
    return response;
}
export const fetchCreateProduct = async (body) => {
    const config = header();
    const response = await axios.post(`${url}/api/products`, body, config)
    console.log("Crear Producto")
    console.log(response)
    return response;
}
export const fetchGetAllProducts = async (skip, limit) =>{
    const config = paginacion(skip, limit)
    const response = await axios.get(`${url}/api/products/`, config)
    console.log("GetAllProducts")
    console.log(response)
    return response;
}
export const fetchGetProduct = async (product_id) =>{
    const config = header();
    const response = await axios.get(`${url}/api/products/${product_id}`, config)
    console.log("GetProduct")
    console.log(response)
    return response;
}
export const fetchPutProduct = async (product_id, body)=>{
    const config = header();
    const response = await axios.put(`${url}/api/products/${product_id}`, body, config)
    console.log("PutProduct")
    console.log(response)
    return response;
}
export const fetchDeleteProduct = async (product_id) =>{
    const config = header();
    const response = await axios.delete(`${url}/api/products/${product_id}`, config)
    console.log("DeleteProduct")
    console.log(response)
    return response;
}
