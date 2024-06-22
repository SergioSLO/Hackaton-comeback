import Paginacion from "../Components/AdminPaginacion.jsx";
import {AdminNavbar} from "../layout/AdminNavbar.jsx";
import {UserNavbar} from "../layout/UserNavbar.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchCartAddItem} from "../Service/cart_api.js";
import AdminPaginacion from "../Components/AdminPaginacion.jsx";
import UserPaginacion from "../Components/UserPaginacion.jsx";

function UserDashboard(){
    return (
        <>
            <UserNavbar/>
            <UserPaginacion></UserPaginacion>
        </>
    )
}
function AdminDashboard(){
    return (
        <>
            <AdminNavbar/>
            <AdminPaginacion></AdminPaginacion>
        </>
    )
}
export default function Dashboard(){
     if(localStorage.getItem("role")==="Admin"){
         return <AdminDashboard/>}
     else{
         return <UserDashboard/>
     }

}