import React, { lazy, Suspense } from 'react';
const Header = lazy(() => import('../components/common/Header'));
import { useCart } from '../context/CartContext';
import CartItem from '../components/order/CartItem';

const CartPage = () => {
  const { cartItems, totalAmount, totalItems, checkout, clearCart } = useCart();

  const handleCheckout = () => {
    checkout();
  };

  return (
    <>
      <Suspense fallback={<div style={{height: '64px'}}></div>}>
        <Header />
      </Suspense>
      <div className="container" style={{ padding: '40px 0' }}>
        <h2>თქვენი კალათა ({totalItems})</h2>

        <div style={cartContainerStyle}>
          {cartItems.length === 0 ? (
            <p>კალათა ცარიელია. დაამატეთ კერძები მენიუდან!</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              
              <div style={totalRowStyle}>
                <span>სულ გადასახდელი:</span>
                <span style={{fontSize: '1.5em', color: 'var(--primary-color)'}}>{totalAmount} ₾</span>
              </div>
              
              <div style={footerButtonsStyle}>
                  <button onClick={clearCart} style={clearCartButtonStyle}>
                      კალათის გასუფთავება
                  </button>
                  <button 
                      className="button-primary" 
                      onClick={handleCheckout} 
                  >
                      შეკვეთის გაფორმება
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};


const cartContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
};

const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '2px dashed #ccc',
    fontWeight: 'bold',
};

const footerButtonsStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    marginTop: '20px'
};

const clearCartButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#aaa',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export default CartPage;