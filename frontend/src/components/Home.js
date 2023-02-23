import Login from './Login';
import Register from './Register';
import { Stack, Row, Col } from 'react-bootstrap';

const Home = ({ loggedUser, showMessage, setLoggedUser }) => {
  return (
    <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '30px'}}>
        <h3 style={{fontWeight: 'bold'}}>Welcome to Design Marketplace!</h3>
        <p style={{fontSize: '17px'}}>Here you can sell and buy furniture and design items.</p>
      {!loggedUser ? (
      <Row style={{padding: '10px'}}>
        <Col style={{padding: '20px'}}><Register /></Col>
        <Col style={{padding: '20px'}}><Login showMessage={showMessage} setLoggedUser={setLoggedUser}/></Col>
      </Row>
      ) : (
        <h2>Add pictures here</h2>
      )}
    </Stack>
  )
};

export default Home;
