import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';

const Login = ({ showMessage }) => {
  const onPressFunction = () => {
    showMessage('viesti', 'hederi', 'success');
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button onClick={onPressFunction}>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
