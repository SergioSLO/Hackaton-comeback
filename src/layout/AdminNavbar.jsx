import {Button} from "../Components/button.jsx";
import {useNavigate} from "react-router-dom";


export const AdminNavbar = () => {
    const nav = useNavigate();

    const handleLogOut = ()=>{
        localStorage.clear();
        nav('/auth/login')
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
                <Button message="Añadir un producto" to="/create" textcolor="text-white"/>
                <button className="py-2 px-4 text-c1 bg-c3 mx-6  rounded-full cursor-pointer" onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    </div>
)
};