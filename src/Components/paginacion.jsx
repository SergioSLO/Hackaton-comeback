import { useEffect, useState } from "react";
import { Card } from "antd";
import { fetchGetProducts } from "../Service/api.js";
import '../index.css'; // Import the CSS file where Tailwind is included

export default function Paginacion() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const fetchProducts = async () => {
        console.log("Fetching products");
        try {
            const response = await fetchGetProducts(skip, limit);
            const fetchedProducts = response.data.products;
            setProducts(fetchedProducts);
            console.log("Success");
            console.log(fetchedProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [skip]);

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <Card key={product.id} title={product.title} cover={
                            <img
                                alt="img"
                                src={product.images[0]}
                                className="w-1/4 object-cover"
                            />
                        }>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
