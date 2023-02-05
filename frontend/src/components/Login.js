import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/login';
import itemService from '../services/item';

const Login = ( { showMessage, setLoggedUser } ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem('loggedMarketplaceUser', JSON.stringify(user));

      itemService.setToken(user.token);
      setLoggedUser(user);
      setUsername('');
      setPassword('');

      showMessage('Login successful', `Welcome, ${username}`, 'success');
      navigate('/');
    } catch (error) {
      showMessage(error.message, 'Error:', 'danger');
    }
  };

  return (
    <Container style={{backgroundColor: 'rgba(89, 189, 245, 0.19)', borderRadius: '10px', padding: '25px'}}>
      <p style={{fontSize: '17px', fontWeight: 'bold'}}>Already a user? <br />Login here!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
