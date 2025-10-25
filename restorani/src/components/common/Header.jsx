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
          
         
          <Link to="/cart" style={cartButtonStyle}>
            🛒 კალათა <span style={itemCountStyle}>({totalItems})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};


const headerStyle = {
  
  backgroundColor: 'var(--header-bg, #f7f7f7)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  padding: '12px 0', 
  borderBottom: '1px solid var(--border-color, #eee)',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '28px', 
  fontWeight: '900',
  color: 'var(--primary-color, #2c3e50)',
  textDecoration: 'none',
  letterSpacing: '-0.5px', 
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
};


const navLinkBaseStyle = {
  textDecoration: 'none',
  color: 'var(--secondary-color, #333)',
  transition: 'color 0.2s ease, transform 0.2s ease',
  fontSize: '16px',
};


const navLinkStyle = {
    ...navLinkBaseStyle,
    fontWeight: '600',
  
};

const cartButtonStyle = {

  backgroundColor: 'var(--primary-color, #ff6b6b)', 
  color: '#fff', 
  padding: '10px 18px',
  fontSize: '15px',
  fontWeight: 'bold',
  borderRadius: '25px', 
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
 
};

const itemCountStyle = {
    marginLeft: '5px',
    fontWeight: '700',
    
};

export default Header;