import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import crudService from '../CrudService/CrudService';

export default function Adddata() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate

  const myfunc = (values) => {
    crudService.insertData(values).then((res) => {
      console.log('After adding data');
      console.log(res);
      navigate("/selectdata")
    })
  }
  return (
    <Container>
      <Form onSubmit={myfunc}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" {...register("title", { required: true })} />
          {errors.title?.type === 'required' && <p role="alert">Title is required</p>}

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price"  {...register("price", { required: true })} />
          {errors.price?.type === 'required' && <p role="alert">price is required</p>}

        </Form.Group>

        <Form.Select aria-label="Default select example"  {...register("category", { required: true })}>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="Women's clothing">Women's clothing</option>
          {errors.category?.type === 'required' && <p role="alert">Title is required</p>}

        </Form.Select>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Path</Form.Label>
          <Form.Control type="text" placeholder="Enter Image PAth"  {...register("path", { required: true })} />
          {errors.path?.type === 'required' && <p role="alert">Title is required</p>}

        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            {...register("description", { required: true, maxLength: 100 })}
          />
          {errors.description?.type === 'required' && <p role="alert">Title is required</p>}
          {errors.description?.type === 'maxlength' && <p role="alert">Max length is 100</p>}


        </Form.Group>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
