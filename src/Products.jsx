import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    return (
        <>
            {
                products.map(product => (
                    <div key={product.id}>
                        <h4>{product.title}</h4>
                        <p>
                            <Link to={'/ProductDetail/' + product.id}>
                                <img src={product.image} alt={product.title} width={200} /><br />
                                Price :
                                {product.price}
                            </Link>
                        </p>
                    </div>
                ))
            }


        </>
    )
}
export default Products;