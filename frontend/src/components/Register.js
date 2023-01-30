import { Button, Form, Container } from 'react-bootstrap';
import userService from '../services/user';
import { useState } from 'react';

const Register = ({ showMessage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userObject = { username, password, email };
      console.log(userObject);
      await userService.create(userObject);
      showMessage(
        `User '${username}' is now registered!`,
        'Registeration successful',
        'success'
      );
    } catch (error) {
      showMessage(error.message, 'Error:', 'danger');
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
