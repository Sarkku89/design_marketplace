import React, { useState, useEffect } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';



const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [imgurl, setImgUrl] = useState('');
    const [seller, setSeller] = useState({});

    useEffect(() => {
        getUser();
        console.log(seller.username);
    }, [])

    const getUser = async () => {
        try {
            const currentUser = JSON.parse(window.localStorage.getItem('loggedMarketplaceUser'));
            setSeller(currentUser);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>

            <h3 style={{ fontWeight: 'bold' }}>Add item</h3>
            <p style={{ fontSize: '17px' }}>Write the details of the item you wish to sell.</p>

            <Form>
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
                        <option value="1">Furniture</option>
                        <option value="2">Decoration</option>
                        <option value="3">Carpets</option>
                        <option value="4">Other textile</option>
                        <option value="5">Other</option>
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
    )
}

export default AddItem