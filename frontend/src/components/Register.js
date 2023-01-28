import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';

const Register = () => {
  return (
    <Container>
      <h2>Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
