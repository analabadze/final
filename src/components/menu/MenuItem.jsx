import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const cardStyle = {
  border: 'none',
  borderRadius: '16px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '320px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  cursor: 'pointer',
};

const cardHoverStyle = {
  transform: 'translateY(-6px)',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const contentStyle = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  flexGrow: 1,
};

const titleStyle = {
  fontSize: '1.1em',
  fontWeight: 600,
  color: '#222',
  marginBottom: '8px',
};

const categoryStyle = {
  fontSize: '0.9em',
  color: '#666',
  marginBottom: '10px',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '12px',
};

const priceStyle = {
  fontSize: '1.25em',
  fontWeight: '700',
  color: 'var(--primary-color, #0070f3)',
};

const buttonStyle = {
  backgroundColor: 'var(--primary-color, #0070f3)',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '0.85em',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.25s ease, transform 0.2s ease',
  whiteSpace: 'nowrap',
};

const buttonHoverStyle = {
  backgroundColor: '#0059c1',
  transform: 'scale(1.03)',
};

const MenuItem = ({ item, isLcp = false }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const handleAddToCart = () => addToCart(item);

  return (
    <div
      style={{
        ...cardStyle,
        ...(isHovered ? cardHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        // If this image is the LCP candidate, request it eagerly and give it high fetch priority.
        loading={isLcp ? 'eager' : 'lazy'}
        fetchPriority={isLcp ? 'high' : undefined}
        src={item.image}
        alt={item.name}
        style={{
          ...imageStyle,
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        }}
      />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{item.name}</h3>
        <p style={categoryStyle}>კატეგორია: {item.category}</p>

        <div style={footerStyle}>
          <span style={priceStyle}>{item.price} ₾</span>
          <button
            style={{
              ...buttonStyle,
              ...(isButtonHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={handleAddToCart}
          >
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
