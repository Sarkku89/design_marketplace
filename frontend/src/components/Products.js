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
                        <option value="Furniture">Furniture</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Carpets">Carpets</option>
                        <option value="OtherTextile">Other textile</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                    <Button style={{ float: 'center' }} type="button" onClick={handleClick}>Browse</Button>
                </Form.Group>




            </Form>

        </Stack>
    )
}

export default Products