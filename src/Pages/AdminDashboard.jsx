import Paginacion from "../Components/paginacion.jsx";

export default function AdminDashboard(){
    const handleBotones = () => {
        return (
            <div className="flex space-x-3">
                <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-blue-700">Editar</button>
                <button className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-green-700">Eliminar</button>
            </div>
        )
    }
    return (
        <>
            <Paginacion botones={handleBotones}></Paginacion>
        </>
    )
}