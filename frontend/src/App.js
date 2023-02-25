import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import NavigationMenu from './components/NavigationMenu';
import AlertMessage from './components/AlertMessage';
import Contact from './components/Contact';
import Products from './components/Products';
import Profile from './components/Profile';
import AddItem from './components/AddItem';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [alertState, setAlertState] = useState({
    show: false,
    variant: '',
    message: '',
    header: '',
  });

  // You can use showMessage function to show a feedback message to
  // the user. Argument "variant" should get the value 'success' for
  // stuff like successfull login and 'danger' for error messages and such.
  const showMessage = (message, header, variant) => {
    setAlertState({ show: true, message: message, header: header, variant: variant });
    setTimeout(() => {
      setAlertState({ ...alertState, show: false });
    }, 4000);
  };

  return (
    <Container>
      <NavigationMenu
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        showMessage={showMessage}
      />
      {alertState.show ? <AlertMessage alertState={alertState} /> : null}
      <Routes>
        <Route path="/register" element={<Register showMessage={showMessage} />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/" element={<Home loggedUser={loggedUser} showMessage={showMessage} setLoggedUser={setLoggedUser}/>} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default App;
