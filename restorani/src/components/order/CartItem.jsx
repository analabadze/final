import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  // ფასის string-ად გარდაქმნა 
  const displayPrice = typeof item.price === 'number' ? item.price.toFixed(2) : item.price;

  return (
    <div style={itemStyle}>
      <img src={item.image} alt={item.name} style={imageStyle} />
      <div style={detailsStyle}>
        <h4>{item.name}</h4>
        <p>ფასი: **{displayPrice} ₾**</p>
      </div>
      <div style={controlsStyle}>
        <button onClick={() => removeFromCart(item.id)} style={controlButtonStyle}>-</button>
        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
        <button onClick={() => addToCart(item)} style={controlButtonStyle}>+</button>
      </div>
      <p style={totalStyle}>**{(item.price * item.quantity).toFixed(2)} ₾**</p>
    </div>
  );
};

// სტილები
const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #eee',
};

const imageStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: 'var(--border-radius)',
  marginRight: '15px',
};

const detailsStyle = {
  flexGrow: 1,
};

const controlsStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px',
};

const controlButtonStyle = {
  padding: '5px 10px',
  border: '1px solid var(--primary-color)',
  background: 'white',
  color: 'var(--primary-color)',
  cursor: 'pointer',
  borderRadius: '4px',
};

const totalStyle = {
    fontWeight: 'bold',
    minWidth: '80px',
    textAlign: 'right',
};

export default CartItem;