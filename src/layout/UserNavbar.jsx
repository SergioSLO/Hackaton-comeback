import {Button} from "../Components/button.jsx";
import {useNavigate} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; // Ejemplo de icono de carrito de compras de Font Awesome




export const UserNavbar = () => {
    const nav = useNavigate();

    const handleLogOut = ()=>{
        localStorage.clear();
        nav('/auth/login')
    }
    function aaaa(){
        nav('/cartbeta');
    }

    return (
        <div className="bg-gray-500 columns-2">

            <div className="p-4">
                <div className="text-white">
                    Bienvenido a Quenta Store
                </div>
            </div>
            <div className="bg-gray-800 p-4">
                <div>
                    <Button message="Home" to="/home" textcolor="text-white"/>
                    <Button message="Ir al carrito" to="/cart" textcolor="text-white"/>
                    <button className="py-2 px-4 text-c1 bg-c3 mx-6  rounded-full cursor-pointer"
                            onClick={handleLogOut}>Log Out
                    </button>
                    <FaShoppingCart onClick={aaaa} className="text-white" size={24}/>
                </div>
            </div>
        </div>
    )
};