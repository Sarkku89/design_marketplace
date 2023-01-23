import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const linkStyle = {
    paddingRight: 6,
  };

  return (
    <div>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="login">
        Login
      </Link>
      <Link style={linkStyle} to="register">
        Register
      </Link>
    </div>
  );
};

export default NavigationMenu;
