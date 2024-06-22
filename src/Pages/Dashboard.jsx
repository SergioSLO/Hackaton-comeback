import Paginacion from "../Components/paginacion.jsx";

export default function Dashboard(){
    const handleBotones = () => {
        return (
            <div className="flex space-x-4">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">Ver más</button>
                <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-700">Comprar</button>
                <button className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700">Agregar al carro
                </button>
            </div>
        )
    }
    return (

        <>
            <div className="flex justify-center mt-8">
                <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                    Ir al carrito
                </button>
            </div>
            <Paginacion botones={handleBotones}></Paginacion>
        </>
    )
}