// Let us begin

// Imports, exports and constants

import axios from "axios";
export const url = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

// Function for the fetching of a GET product operation
export const fetchGetProducts = async (lastKey, limit) => {
    const response = await axios.get(`${url}/items?limit=${limit}&lastKey=${lastKey}`)
    console.log("FetchResult")
    console.log(response)
    return response;
}

// Create Convertor
const conver = (data) => { // Make conversion of the initial data contents
    const precio = Number(data.price)
    const cantidad = Number(data.quantity)
    return(
        {...data,
            price:precio,
            quantity:cantidad,
        }
    )
}

// Declare header for token acquirement and role verification
export const header = () => {
    const token = localStorage.getItem('token'); // Acquire token
    return {headers: {Authorization : `Bearer ${token}`}};
}

// Function declared for pagination.
const paginacion = (skip, limit) => {
    let config = header(); // Config declaration for the header file.
    config = {
        ...config, // Get the configuration parameter
        params:{
            skip,
            limit
        }
    };
    return config; // Return the config
}

// Exportable function for fetching the Log-In operation
export const fetchLogIn = async (body) => {
    const response = await axios.post(`${url}/api/auth/login`,body)
    console.log("LogInResponse")
    console.log(response)
    return response;
}

// Exportable function for fetching the Register operation.
export const fetchRegister = async (body) => {
    const response = await axios.post(`${url}/api/auth/register`,body)
    console.log("RegisterResponse")
    console.log(response)
    return response;
}

// Exportable function for fetching the creation of products.
export const fetchCreateProduct = async (body) => {
    const config = header();
    const response = await axios.post(`${url}/item`, body, config)
    console.log("Crear Producto")
    console.log(response)
    return response;
}

// Exportable function for the fetching the information of all products.
export const fetchGetAllProducts = async (skip, limit) =>{
    const config = paginacion(skip, limit)
    const response = await axios.get(`${url}/api/products/`, config)
    console.log("GetAllProducts")
    console.log(response)
    return response;
}

// Exportable function for the GET of a product.
export const fetchGetProduct = async (product_id) =>{
    const config = header();
    const response = await axios.get(`${url}/item/${product_id}`, config)
    console.log("GetProduct")
    console.log(response)
    return response;
}



export const fetchPutProduct = async (product_id, body) => {
    const config = header();
    console.log(body);
    const data = {
        itemId:body.asin,
        boughtInLastMonth: body.boughtInLastMonth,
        imgUrl: body.imgUrl,
        isBestSeller: body.isBestSeller,
        price: body.price,
        stars: body.stars,
        title: body.title
    }
    console.log(data)
    const response = await axios.put(`${url}/item`, data, config);
    console.log("PutProduct");
    console.log(response);
    return response;
};

export const fetchDeleteProduct = async (product_id) => {
    const config = header();
    const response = await axios.delete(`${url}/item/${product_id}`, config);
    console.log("DeleteProduct");
    console.log(response);
    return response;
};