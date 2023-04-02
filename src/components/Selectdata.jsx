import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import crudService from '../CrudService/CrudService'



export default function Selectdata() {
    const [value, setValue] = useState([]);
    useEffect(() => {
        var data = crudService.selectData();
        console.log(data);
        data.then((res) => {
            setValue(res);
        })
    }, [])
    // function delete (id) => {
    //     console.log(id);
    //     var data = crudService.deleteData(id);
    //     console.log(data);
    //     data.then((res) => {
    //         setValue(res);
    //     })
    // }
    return (
        <Container>
            <h1>Data From Api</h1>
            <Row>
                {
                    Object.keys(value).map((key) =>
                        <Col lg="3">
                            <img src={value[key]['image']} alt="" className='img-fluid' />
                            <h2>{value[key]['price']}</h2>
                            <p>{value[key]['title']}</p>
                            <button className='btn btn-primary'>Delete</button>
                        </Col>)
                }
            </Row>

        </Container>
    )
}
