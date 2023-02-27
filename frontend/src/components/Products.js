import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Stack } from 'react-bootstrap';
import itemService from '../services/item';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Products = () => {
    const [category, setCategory] = useState('All');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const navigate = useNavigate(); 

    const handleClick = () => {
        setLoading(true)
        if (category !== 'All') {
          setFilteredItems(items.filter(item => item.category === category))
        }
        else {
          setFilteredItems(items)
        }
    };

    useEffect(() => {
        let allAsPromise = itemService.getAll();
        allAsPromise.then(function(result){
            console.log(result)
            setItems(result)
        })
    }, [])

    return (
        <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>

            <h3 style={{ fontWeight: 'bold' }}>Products</h3>

            <Form>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Select

                        onChange={({ target }) => setCategory(target.value)}>
                        <option value="All">Choose a category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Carpets">Carpets</option>
                        <option value="OtherTextile">Other textile</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                    <Button style={{ float: 'center', margin: '10px' }} type="button" onClick={handleClick}>Browse</Button>
                </Form.Group>




            </Form>
            <Row xs={3} md={4} className="g-4">
      {loading ? Array.from({ length: filteredItems.length }).map((_, i) => (
        <Col key={filteredItems[i].id}>
          <Card>
            <Card.Img variant="top" src={filteredItems[i].imgurl} />
            <Card.Body>
              <Card.Title>{filteredItems[i].name}</Card.Title>
              <Card.Text>
                Price: {filteredItems[i].price}€
                <br />
                <Button style={{ marginTop: '10px'}} onClick={() => navigate('/item', { state: {item: filteredItems[i]} } )}>More</Button>
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      )) : <p></p>}
    </Row>

        </Stack>
    )
}

export default Products