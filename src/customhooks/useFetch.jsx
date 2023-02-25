import React, { useEffect, useState } from 'react'
import ApiPath from '../Apipath'


export default function useFetch(routeName) {
    const [product, setproduct] = useState([])
    useEffect(() =>
        fetch(ApiPath + routeName)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setproduct(data)
            })
        , [routeName])

    return product

}
console.log('sas');
