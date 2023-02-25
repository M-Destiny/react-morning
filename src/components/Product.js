// import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customhooks/useFetch";

export default function Product() {
    // const [products, setProducts] = useState([]);


    // useState(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             // console.log(data);
    //         });
    // }, []);
    // console.log(products);

    var apiValue = useFetch('products')


    return (
        <div className="container">
            <h1>Products</h1>
            <hr />
            <div className="row">
                {/* {
                    products && products > 0 && products.map((product) => (
                        <div className="col-xl-3 text-center">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                        </div>
                    ))

                } */}
                {
                    apiValue && apiValue.length > 0 && apiValue.map(obj => <div className='col-xl-3 text-center mt-4 mb-4'>
                        <img src={obj.image} className='img-fluid' alt='' />
                        <h3>{obj.title}</h3>
                        <p>{obj.price}</p>
                        <b><p>{obj.category}</p>
                            <p>rating {obj.rating.rate} stars out  of 5 <br /> Total Ratings: {obj.rating.count}</p></b>
                        <p>
                            <Link to={"/single-product/" + obj.id} className='btn btn-dark'>View more</Link>
                        </p>
                    </div>)
                }

            </div>
        </div>
    );
}