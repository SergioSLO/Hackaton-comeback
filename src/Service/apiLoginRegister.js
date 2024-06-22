import axios from "axios";
//prueba
const url = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

export const fetchLogIn = async (body) => {
    const response = await axios.post(`${url}/auth/login`,body)
    console.log("LogInResponse")
    console.log(response)
    return response;
}
export const fetchRegister = async (body) => {
    const response = await axios.post(`${url}/auth/register`,body)
    console.log("RegisterResponse")
    console.log(response)
    return response;
}
