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
    <Row style={{padding: '60px'}} xs={1} sm={1} md={1} lg={2}>
      <Col>
        <img className="singleimage" alt={item.name} src={item.imgurl}></img>
      </Col>
      <Col>
      <React.Fragment>
                    <tr>
                    <th style={{paddingRight: '15px'}}>Name: </th> 
                    <td style={{paddingBottom: '10px'}}>{item.name}<br /></td>
                    </tr>
                    <tr>
                      <th style={{paddingRight: '15px'}}>Description: </th>
                      <td style={{paddingBottom: '10px'}}>{item.description}</td>
                      </tr>
                      <tr>
                        <th style={{paddingRight: '15px'}}>Price:</th>
                      <td style={{paddingBottom: '10px'}}>{item.price}€</td>
                      </tr>
                      <br />
                      <br />
                    </React.Fragment>
                    <p style={{ fontWeight: "bold"}}>About the seller:</p>
                    <React.Fragment>
                    <tr>
                    <th style={{paddingRight: '15px'}}>Username: </th> 
                    <td style={{paddingBottom: '10px'}}>{item.seller.username}<br /></td>
                    </tr>
                    <tr>
                      <th style={{paddingRight: '15px'}}>Email: </th>
                      <td style={{paddingBottom: '10px'}}>{item.seller.email}</td>
                      </tr>
                    </React.Fragment>
        <Stack>


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