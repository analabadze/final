import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header style={headerStyle}>
      <div className="container" style={navContainerStyle}>
        <Link to="/" style={logoStyle}>
          🍜 Simple Menu
        </Link>
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>
            მენიუ
          </Link>
          <Link to="/cart" className="button-primary" style={cartButtonStyle}>
            🛒 კალათა ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

// სტილები
const headerStyle = {
  backgroundColor: 'var(--header-bg)',
  boxShadow: 'var(--shadow)',
  padding: '15px 0',
};

const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'var(--primary-color)',
  textDecoration: 'none',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--secondary-color)',
  margin: '0 15px',
  transition: 'color 0.3s ease',
};

const cartButtonStyle = {
    padding: '8px 15px',
    fontSize: '14px',
};

export default Header;