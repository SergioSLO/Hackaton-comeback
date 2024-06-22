import Paginacion from "../Components/paginacion.jsx";
import {AdminNavbar} from "../layout/AdminNavbar.jsx";
import {UserNavbar} from "../layout/UserNavbar.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchCartAddItem} from "../Service/cart_api.js";

function UserDashboard(){
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')

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
        navigate(`/productos/${id}`);

    }
    const handleBotones = (productId) => {
        return (
            <div className="flex space-x-4 justify-center">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700" onClick={() => handleGetMore(productId)}>Ver más</button>
                <button className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700">Agregar al carro
                </button>
            </div>
        )
    }
    return (
        <>
            <UserNavbar/>
            <Paginacion botones={handleBotones}></Paginacion>
        </>
    )
}
function AdminDashboard(){
    const handleBotones = () => {
        return (
            <div className="flex justify-center space-x-3">
                <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-blue-700">Editar</button>
                <button className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-green-700">Eliminar</button>
            </div>
        )
    }
    return (
        <>
            <AdminNavbar/>
            <Paginacion botones={handleBotones}></Paginacion>
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