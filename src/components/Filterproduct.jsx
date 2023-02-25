import React from 'react'
import { Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import useFetch from '../customhooks/useFetch';

export default function Filterproduct(props) {
    console.log(props.cat);
    const { cat } = props;
    var value = (cat == "") ? "products" : `products/category/${cat}`
    console.log(value);
    var apiValue = useFetch(value)
    console.log(apiValue);
    return (
        <>
            <div>category wise product</div>
            <Row>
                {
                    apiValue && apiValue.length > 0 && apiValue.map(obj => <div className='col-xl-3 text-center mt-4 mb-4'>
                        <img src={obj.image} className='img-fluid' alt='' />
                        <h3>{obj.title}</h3>
                        <p>{obj.price}</p>
                        <b><p>{obj.category}</p>
                            <p>rating {obj.rating.rate} stars out  of 5 <br /> Total Ratings: {obj.rating.count}</p></b>
                        <p>
                            {/* <Link to={"/single-product/" + obj.id} className='btn btn-dark'>View more</Link> */}
                        </p>
                    </div>)
                }
            </Row>
        </>
    )
}
