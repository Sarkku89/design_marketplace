import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavigationMenu = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>Design Marketplace</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <LinkContainer to={'/login'}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/register'}>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
