import {useEffect, useState} from "react";
import { Card } from "antd";
import {fetchGetProducts} from "../Service/api.js";

export default function Paginacion() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit,setLimit] = useState(10);

    const fetch = async () => {
        console.log("Se hace el fetch")
        const response = await fetchGetProducts(skip, limit);
        const productes = response.data.products
        setProducts(productes)
        console.log("Exito")
        console.log(products)
    }
    useEffect(() => {
        fetch();
    }, [skip]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Card key={product.id} title={product.title} cover={<img alt="img" src={product.images[0]}/>}>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
