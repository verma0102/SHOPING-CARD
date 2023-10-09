import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { pid } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + pid)
            .then(response => {
                const rcds = [...products]
                rcds.push(response.data);
                setProducts(rcds);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <h2>Products Detail of : {pid}</h2>

            {
                products.map(product => (
                    <div key={product.id}>
                        <h4>{product.title}</h4>
                        <p>

                            <img src={product.image} alt={product.title} width={200} /><br />
                            </p>

                        <h3>Price: {product.price}</h3>  

                      
                    </div>
                ))
            }


        </>
    )
}
export default ProductDetail;