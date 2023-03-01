import React, { useState, useEffect } from 'react';
import { Stack, Row, Col, Button } from 'react-bootstrap';
import itemService from '../services/item';
import { useNavigate } from 'react-router-dom';

const Profile = (loggedUser) => {
  const [userItems, setUserItems] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    getUser()
  }, [])
  
  const getUser = async () => {
    const items = await itemService.getUserItems()
    setUserItems(items)
    setUser(loggedUser.loggedUser);
  };

  const deleteItem = async (event, itemToBeRemoved) => {
    await itemService.remove(itemToBeRemoved)
    const items = await itemService.getUserItems()
    setUserItems(items);
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  return (
    <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '30px'}}>
      <h3 style={{fontWeight: 'bold'}}>Profile</h3>
      <React.Fragment>
                    <tr>
                    <th style={{paddingRight: '15px'}}>Username: </th> 
                    <td style={{paddingBottom: '5px'}}>{user.username}<br /></td>
                    </tr>
                    <tr>
                      <th style={{paddingRight: '15px'}}>Email: </th>
                      <td style={{paddingBottom: '5px'}}>{user.email}</td>
                      </tr><br /> 
                    </React.Fragment>
                    
    
      <h3 style={{fontWeight: 'bold'}}>Items on sale</h3>
      <ul>
          {userItems.length > 0 ?
            userItems.map(item => {
              return <div key={item.id}>
                <div className='profile'>
                <Row style={{padding: '20px'}}>
                  <Col>
                  
                  
                    <img className="profileimage" alt={item.name} src={item.imgurl}></img></Col>
                  <Col>
                  <table>
                  <tbody>
                   
                    <tr>
                    <th style={{paddingRight: '15px'}}>Name: </th> 
                    <td style={{paddingBottom: '10px'}}>{item.name}<br /></td>
                    </tr>
                    <tr>
                      <th style={{paddingRight: '15px'}}>Description: </th>
                      <td style={{paddingBottom: '10px'}}>{item.description}</td>
                      </tr>
                      <tr>
                        <th style={{paddingRight: '15px'}}>Price:</th>
                      <td style={{paddingBottom: '10px'}}>{item.price}€</td>
                      </tr>
                      
                    </tbody>
                    </table>
                    
                    <table>
                  <tbody>
                      <tr>
                      <td><Button style={{marginTop: '30px', marginRight:'10px'}} onClick={() => navigate(`/update/${item.id}`, { state: {item: item} } )}>Edit</Button>
                      </td>
                      <td>
                      <Button style={{marginTop: '30px'}} onClick={event => deleteItem(event, item)}>Delete</Button>
                      </td>
                      </tr>
                       
                    </tbody>
                    </table>
   
                  </Col>
                  </Row>    
                  </div>                  
                <ColoredLine />
              </div>
              
            })
          : <p>User has no items on sale</p> }
      </ul>
      
    </Stack>
    
  )
}

export default Profile