import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header style={headerStyle}>
      <div className="container" style={navContainerStyle}>
        {/* Logo */}
        <Link to="/" style={logoStyle}>
          🍜 Simple Menu
        </Link>
        
        {/* Navigation */}
        <nav style={navStyle}>
          {/* Menu Link */}
          <Link to="/" style={navLinkStyle}>
            მენიუ
          </Link>
          
          {/* Cart Button/Link */}
          <Link to="/cart" style={cartButtonStyle}>
            🛒 კალათა <span style={itemCountStyle}>({totalItems})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

// --- სტილები (Styles) ---
const headerStyle = {
  // Slightly darker background for better contrast, less vertical padding
  backgroundColor: 'var(--header-bg, #f7f7f7)', // Default to light gray
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
  fontSize: '28px', // Larger font size
  fontWeight: '900', // Bolder weight
  color: 'var(--primary-color, #2c3e50)', // Stronger color
  textDecoration: 'none',
  letterSpacing: '-0.5px', // Tighter spacing
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '25px', // Use gap for spacing instead of margins
};

// Base style for navigation links
const navLinkBaseStyle = {
  textDecoration: 'none',
  color: 'var(--secondary-color, #333)',
  transition: 'color 0.2s ease, transform 0.2s ease',
  fontSize: '16px',
};

// Hover/Focus effects for interactivity (requires a separate CSS file or utility for proper :hover)
// For simplicity in inline styles, we'll keep the base style here.
// NOTE: For a real app, you should use a CSS file or styled components to handle :hover states.
const navLinkStyle = {
    ...navLinkBaseStyle,
    fontWeight: '600',
    // In a real scenario, you'd add this to a CSS class:
    // '&:hover': { color: 'var(--primary-color)' }
};

const cartButtonStyle = {
  // Making the button stand out more
  backgroundColor: 'var(--primary-color, #ff6b6b)', // Primary color background
  color: '#fff', // White text for contrast
  padding: '10px 18px',
  fontSize: '15px',
  fontWeight: 'bold',
  borderRadius: '25px', // Rounded pill shape
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  // In a real scenario, you'd add this to a CSS class:
  // '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)' }
};

const itemCountStyle = {
    marginLeft: '5px',
    fontWeight: '700',
    // Optional: add a badge style if desired, but parentheses work well here
};

export default Header;