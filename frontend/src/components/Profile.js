import React, { useState, useEffect } from 'react';
import { Stack, Row, Col, Button, Nav } from 'react-bootstrap';
import itemService from '../services/item';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userItems, setUserItems] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    getUser()
  }, [])
  
  const getUser = async () => {
    const items = await itemService.getUserItems()
    setUserItems(items)
    setUser(JSON.parse(window.localStorage.getItem('loggedMarketplaceUser')));
  };

  const deleteItem = (event, itemToBeRemoved) => {
    itemService.remove(itemToBeRemoved)
  }

  return (
    <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '30px'}}>
      <h3 style={{fontWeight: 'bold'}}>Profile</h3>
      <p style={{textAlign: 'center'}}>Username:<br />{user.username}</p>
      <br />
      <p style={{textAlign: 'center'}}>Email:<br />{user.email}</p>
      <h3 style={{fontWeight: 'bold'}}>Items on sale</h3>
      <ul>
          {userItems.length > 0 ?
            userItems.map(item => {
              return <div key={item.id}>
                <Row style={{padding: '20px'}}>
                  <Col>
                    <img className="image" alt={item.name} src={item.imgurl}></img></Col>
                  <Col>
                    <p>
                      Name: {item.name}
                      <br/>Description: {item.description}
                      <br/>Price: {item.price}€
                    </p>
                  </Col>
                  <Col>
                    <Stack style={{}}>
                      <Button style={{ marginLeft: '20px'}} onClick={() => navigate(`/update/${item.id}`, { state: {item: item} } )}>Edit</Button>
                      <Button style={{marginLeft: '20px', marginTop:'10px'}} onClick={event => deleteItem(event, item)}>Delete</Button>
                    </Stack>
                  </Col>
                </Row>
              </div>
            })
          : <p>User has no items on sale</p> }
      </ul>
    </Stack>
  )
}

export default Profile