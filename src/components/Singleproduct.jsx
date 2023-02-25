import React from 'react'
import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../customhooks/useFetch';


export default function Singleproduct() {

    // const [product, setproduct] = useState({})
    // path: 'single-product/:id',

    let ans = useParams()
    console.log(ans)

    var id = ans['id']
    console.log(id)

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => setproduct(data))
    // }, [])

    var product = useFetch(`products/${id}`)
    return (
        <Container>
            <Row>
                <div className='col-xl-5'>
                    <img src={product.image} alt="" className='img-fluid' />
                </div>
                <div className='col-xl-7'>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h3>Price: {product.price}$</h3>
                    <h3>Category: {product.category}</h3>
                    <button className='btn btn-dark mt-3'>Add to cart</button>
                </div>
            </Row>
        </Container>

    )
}
// Material UI css , Ant design css, Bootstrap css