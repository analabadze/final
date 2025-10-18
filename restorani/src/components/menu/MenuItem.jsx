import React from 'react';
import { useCart } from '../../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div style={cardStyle}>
      <img src={item.image} alt={item.name} style={imageStyle} />
      <div style={contentStyle}>
        <h3>{item.name}</h3>
        <p style={{ color: '#555' }}>კატეგორია: {item.category}</p>
        <div style={footerStyle}>
          <span style={priceStyle}>{item.price} ₾</span>
          <button className="button-primary" onClick={handleAddToCart}>
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

// სტილები
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  width: '300px',
  boxShadow: 'var(--shadow)',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '15px',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
};

const priceStyle = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: 'var(--primary-color)',
};

export default MenuItem;