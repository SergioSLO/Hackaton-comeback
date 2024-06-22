import axios from "axios";
import { jwtDecode } from 'jwt-decode';
//prueba
const url = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
}

export const fetchLogIn = async (body) => {
    const response = await axios.post(`${url}/auth/login`, body)
    console.log("LogInResponse")
    console.log(response)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("role", getRoleBasedOnToken(response.data.token))
    return response;
}
export const fetchRegister = async (body) => {
    const response = await axios.post(`${url}/auth/register`,body)
    console.log("RegisterResponse")
    console.log(response)
    return response;
}
