import Paginacion from "../Components/paginacion.jsx";
import {AdminNavbar} from "../layout/AdminNavbar.jsx";
import {UserNavbar} from "../layout/UserNavbar.jsx";

function UserDashboard(){
    const handleBotones = () => {
        return (
            <div className="flex space-x-4 justify-center">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">Ver más</button>
                <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-700">Comprar</button>
                <button className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700">Agregar al carro
                </button>
            </div>
        )
    }
    return (
        <>
            <UserNavbar/>
            <div className="flex justify-center mt-8">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                    Ir al carrito
                </button>
            </div>
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
            <div className="flex justify-center mt-8">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                    Crear Producto
                </button>
            </div>
            <Paginacion botones={handleBotones}></Paginacion>
        </>
    )
}
export default function Dashboard(){
     if(false){
         return <AdminDashboard/>}
     else{
         return <UserDashboard/>
     }

}