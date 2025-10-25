import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header style={headerStyle}>
      <div style={topBarStyle}></div> 
      
      <div className="container" style={navContainerStyle}>
        
        {/* ლოგო და მენიუს ლინკი - ერთ ჯგუფში მარცხნივ */}
        <div style={leftGroupStyle}>
            <Link to="/" style={logoStyle}>
              🍜 Simple Menu
            </Link>
            
            <nav style={menuNavStyle}>
              <Link to="/" style={navLinkStyle}>
                მენიუ
              </Link>
            </nav>
        </div>
        
        {/* კალათა - მარჯვენა კიდეზე, მაქსიმალურად გამოყოფილი */}
        <Link to="/cart" style={cartButtonStyle}>
          🛒 კალათა <span style={itemCountStyle}>({totalItems})</span>
        </Link>
      </div>
    </header>
  );
};

// --- სტილები (Styles) ---

const topBarStyle = {
    backgroundColor: 'var(--primary-color-dark, #2c3e50)', 
    height: '4px',
    width: '100%',
};

const headerStyle = {
  backgroundColor: 'var(--header-bg, #ffffff)', 
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  padding: '15px 0', 
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// ახალი სტილი ლოგოსა და მენიუს ერთ ჯგუფად გასაერთიანებლად
const leftGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px', // დიდი დაშორება ლოგოსა და მენიუს შორის
};

const logoStyle = {
  fontSize: '30px', 
  fontWeight: '900', 
  color: 'var(--primary-color-brand, #34495e)',
  textDecoration: 'none',
  letterSpacing: '-1px',
};

const menuNavStyle = {
    // ეს მხოლოდ მენიუს ლინკს მოიცავს
    display: 'flex',
    alignItems: 'center',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--secondary-color, #333)',
  transition: 'color 0.2s ease, border-bottom 0.2s ease',
  fontSize: '17px',
  fontWeight: '600',
  paddingBottom: '2px',
  borderBottom: '2px solid transparent',
};

const cartButtonStyle = {
  // კალათის ღილაკი რჩება ძლიერი, მარჯვენა კიდეზე
  backgroundColor: 'var(--primary-color, #e74c3c)',
  color: '#fff', 
  padding: '12px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  flexShrink: 0, // უზრუნველყოფს, რომ არ შეიკუმშოს
};

const itemCountStyle = {
    marginLeft: '8px',
    fontWeight: '800',
    fontSize: '17px',
};

export default Header;