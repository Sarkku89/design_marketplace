import React, { useState, useEffect } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';



const Products = () => {
    const [category, setCategory] = useState('0');
    const [items, setItems] = useState([]);
    const handleClick = () => {

        
    };

    return (
        <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>

            <h3 style={{ fontWeight: 'bold' }}>Products</h3>

            <Form>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Select

                        onChange={({ target }) => setCategory(target.value)}>
                        <option>Choose a category</option>
                        <option value="1">Furniture</option>
                        <option value="2">Decoration</option>
                        <option value="3">Carpets</option>
                        <option value="4">Other textile</option>
                        <option value="5">Other</option>
                    </Form.Select>
                    <Button style={{ float: 'center' }} type="button" onClick={handleClick}>Browse</Button>
                </Form.Group>




            </Form>

        </Stack>
    )
}

export default Products