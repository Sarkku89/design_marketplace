import React, { useState, useEffect } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import itemService from '../services/item';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Products = () => {
    const [category, setCategory] = useState('0');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false); 

    const handleClick = () => {
        let allAsPromise = itemService.getAll();
        allAsPromise.then(function(result){
            console.log(result)
            setItems(result)
            console.log(items.length)
            console.log(items)
            setLoading(true)
        })
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
            <Row xs={1} md={2} className="g-4">
      {loading ? Array.from({ length: items.length }).map((_, i) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="imgs.js/100px160" />
            <Card.Body>
              <Card.Title>{items[i].name}</Card.Title>
              <Card.Text>
                Description: {items[i].description} {'\n'}
                Price: {items[i].price}
                {'\n'}
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      )) : <p>Loading</p>}
    </Row>

        </Stack>
    )
}

export default Products