import React, { useEffect, useState, } from "react";
import {  useNavigate } from "react-router";
import { Button, Form, Stack } from 'react-bootstrap';
import { useLocation } from "react-router";
import itemService from '../services/item';

 
const UpdateItem = () => {

    const location = useLocation();
    const item = location.state.item;
    const navigate = useNavigate();



    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [category, setCategory] = useState(item.category);
    const [price, setPrice] = useState(item.price);
    const [imgurl, setImgUrl] = useState(item.imgurl);

   
    const onSave = async () => {
        try {
            await itemService.update(
                {
                    id: item.id,
                    name,
                    description,
                    category,
                    price,
                    imgurl,
                   
                }
            ).then(navigate('/profile'))
        } catch (error) {
            console.log(error.message);
        }
    };
 

 // This following section will display the form that takes input from the user to update the data.
 return (
    <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>

            <h3 style={{ fontWeight: 'bold' }}>Update item</h3>

            <Form onSubmit={onSave}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Control
                        value={name}
                        placeholder='Name'
                        onChange={({ target }) => setName(target.value)}
                        type='text'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imgurl'>
                    <Form.Control
                        value={imgurl}
                        placeholder='Write image URL'
                        onChange={({ target }) => setImgUrl(target.value)}
                        type='text'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                    <Form.Control
                        as='textarea' rows={3}
                        placeholder='Write a description of your item'
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        type='text'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Select
                        onChange={({ target }) => setCategory(target.value)}
                        aria-label="Choose a category">
                        <option>Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Carpets">Carpets</option>
                        <option value="OtherTextile">Other textile</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='price'>
                    <Form.Control
                        as='textarea' rows={1}
                        placeholder='Price'
                        value={price}
                        onChange={({ target }) => setPrice(target.value)}
                        type='text'
                    />
                </Form.Group>

                <Button style={{ float: 'right' }} type='submit'>Save</Button>

            </Form>

        </Stack>
  
 );
}

export default UpdateItem;