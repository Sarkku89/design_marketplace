import { LinkContainer } from 'react-router-bootstrap';
//import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import itemService from '../services/item';

const NavigationMenu = ({ loggedUser, setLoggedUser, showMessage }) => {
  //const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem('loggedMarketplaceUser');
    itemService.setToken(null);
    setLoggedUser(null);
    showMessage('See you again soon!', 'Logged out', 'success');
    //navigate('/');
  };

  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>Design Marketplace</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          {!loggedUser ? (
            <Nav>
              <LinkContainer to={'/login'}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/register'}>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to={'/'}>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
