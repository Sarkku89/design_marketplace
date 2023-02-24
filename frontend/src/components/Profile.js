import React, { useState, useEffect } from 'react';
import { Stack, Container } from 'react-bootstrap';

const Profile = () => {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    getUser();
  }, [])
  
  const getUser = async () => {
    try {
      const currentUser = JSON.parse(window.localStorage.getItem('loggedMarketplaceUser'));     
      setUser(currentUser);
    } catch (error) {
    console.log(error.message);
    }
  };

  return (
    <Stack style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '30px'}}>
      <h3 style={{fontWeight: 'bold'}}>Profile</h3>
      <p style={{textAlign: 'center'}}>Username:<br />{user.username}</p>
      <br />
      <p style={{textAlign: 'center'}}>Email:<br />{user.email}</p>
      <h3 style={{fontWeight: 'bold'}}>Items on sale</h3>
      <Container>
        <Stack>
          <div> items </div>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Profile