import Login from './Login';
import Register from './Register';
import { Stack, Row, Col, Container } from 'react-bootstrap';

const Home = ({ loggedUser, showMessage, setLoggedUser }) => {
  return (
    <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '40px'}}>
        <h3 style={{fontWeight: 'bold'}}>Welcome to Design Marketplace!</h3>
        <p style={{fontSize: '17px'}}>Here you can sell and buy furniture and design items.</p>
      {!loggedUser ? (
      <Row style={{padding: '10px'}}>
        <Col style={{padding: '20px'}}><Register showMessage={showMessage}  /></Col>
        <Col style={{padding: '20px'}}><Login showMessage={showMessage} setLoggedUser={setLoggedUser}/></Col>
      </Row>
      ) : (
      <Container>
      <Row style={{padding: '40px'}}>
        <Col>
          <img className="image" alt="sofa" src="https://motarasu.com/wp-content/uploads/2021/01/Motarasu-designs-interior_jundo-daybed_yoko-tea-set_Union-tray.jpg"></img>
        </Col>
        <Col>
          <img className="image" alt="table" src="https://www.next.co.uk/nxtcms/resource/blob/5366004/311110dfa9fef7c66ce7d69a25c69d54/dining-data.jpg"></img>
        </Col>
        <Col>
          <img className="image" alt="chair" src="https://normcph.com/new/2018/wp-content/uploads/2021/08/Ikke-navngivet-2.jpg"></img>
        </Col>
      </Row></Container>
      )}
    </Stack>
  )
};

export default Home;
