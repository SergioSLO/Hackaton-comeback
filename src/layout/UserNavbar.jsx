import {Button} from "../Components/button.jsx";


export const UserNavbar = () => {

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
                </div>
            </div>
        </div>
)
};