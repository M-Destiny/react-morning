import React from 'react'
import { useSelector } from 'react-redux';

export default function ReduxRight() {
  const Products = useSelector((state) => state['reducer2']);
  console.log(Products);
  return (
    <div>
      <h1>Products</h1>
      <div className='row'>

        {
          Products.map(ans =>
            <div className='col-xl-3 border'>
              <img src={ans.image} className='img-fluid' alt="images" />
              <h2>{ans.title}</h2>
              <p>{ans.price}</p>
            </div>
          )
        }


      </div>
    </div>
  )
}
