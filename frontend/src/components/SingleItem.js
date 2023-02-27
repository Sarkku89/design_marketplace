import React, { useState } from 'react'
import { Stack, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

const SingleItem = (props) => {
  const location = useLocation();
  const navigate = useNavigate()
  const item = location.state.item;
  const [message, setMessage] = useState('');
  const user = JSON.parse(window.localStorage.getItem('loggedMarketplaceUser'));

  const sendMessage = () => {
    const email = user.email;
    console.log(email, message);
    navigate('/products')
  }

  return (
    <Row style={{padding: '60px'}}>
      <Col>
        <img className="image" alt={item.name} src={item.imgurl}></img>
      </Col>
      <Col>
        <Stack>
          <p style={{ fontWeight: "bold"}}>{item.name}</p>
          <p>
          Description: {item.description}
          <br />Price: {item.price}€</p>

          <div style={{ marginTop: "10px"}}>
            <p style={{ fontWeight: "bold"}}>About the seller:</p>
            <p>Username: {item.seller.username}<br />
            Email: {item.seller.email}</p>
          </div>

          <div style={{ marginTop: "10px"}}>
            <p style={{ fontWeight: "bold"}}>Interested?</p>
            <p>Contact the seller via email here:</p>
            <Form>
                <Form.Group className='mb-3' controlId='contact'>
                <Form.Control
                    as='textarea' rows={3}
                    placeholder='Write a message...'
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    type='text'
                />
                </Form.Group>

                <Button style={{float: 'right'}} type='submit' onClick={sendMessage}>Send</Button>

            </Form>
          </div>
        </Stack>
      </Col>
    </Row>
  )
}

export default SingleItem;