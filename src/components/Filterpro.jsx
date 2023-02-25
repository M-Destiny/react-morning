import React, { useState } from 'react'
import useFetch from '../customhooks/useFetch'
import Filterproduct from './Filterproduct';

export default function Filterpro() {

    const [category, setcategory] = useState('')
    function myfunc(ev) {
        // console.log('test');
        console.log(ev.target.value);
        setcategory(ev.target.value)
    }

    var ans_category = useFetch('products/categories')
    return (
        <div className='container'>
            <h1>Select category</h1>
            <select className='form-control' onChange={myfunc}>
                <option value=''>Please select category</option>
                {
                    ans_category && ans_category.length > 0 && ans_category.map(obj => <option value={obj}>{obj}</option>)
                }
            </select>
            <Filterproduct cat={category} />

        </div>
    )
}
