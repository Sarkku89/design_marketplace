import React, { useState } from 'react';
import { Stack, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Row style={{padding: '60px'}} xs={1} sm={1} md={1} lg={2}>
            <Col><img className="singleimage" alt="table" src="https://motarasu.com/wp-content/uploads/2021/01/Motarasu-designs-interior_jundo-daybed_yoko-tea-set_Union-tray.jpg"></img></Col>
      <Col>
        <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '30px'}}>
            
            <h3 style={{fontWeight: 'bold'}}>Contact us</h3>
            <p style={{fontSize: '17px', textAlign: 'center'}}>Feel free to contact us if you are facing issues or have other questions.</p>

            <Form>
                <Form.Group className='mb-3' controlId='email'>
                <Form.Control
                    value={email}
                    placeholder='Email'
                    onChange={({ target }) => setEmail(target.value)}
                    type='text'
                />
                </Form.Group>
                <Form.Group className='mb-3' controlId='contact'>
                <Form.Control
                    as='textarea' rows={3}
                    placeholder='Tell us what is on your mind...'
                    value={contact}
                    onChange={({ target }) => setContact(target.value)}
                    type='text'
                />
                </Form.Group>

                <Button style={{float: 'right'}} type='submit'>Send</Button>

            </Form>

        </Stack>
        </Col>
        </Row>
    )
}

export default Contact