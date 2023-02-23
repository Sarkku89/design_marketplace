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
    <div>
      <h2 style={{fontWeight: 'bold', textAlign: 'center', padding: '20px'}}>DESIGN MARKETPLACE</h2>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            {!loggedUser ? (
              <Nav>
                <LinkContainer to={'/'}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/'}>
                  <Nav.Link>Products</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to={'/contact'}>
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to={'/'}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/products'}>
                  <Nav.Link>Products</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/additem'}>
                  <Nav.Link>Add item</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/contact'}>
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/profile'}>
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/'}>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationMenu;


