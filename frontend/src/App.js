import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import NavigationMenu from './components/NavigationMenu';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavigationMenu />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
