import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // ფასი უნდა იყოს float
        return [...prevItems, { ...item, quantity: 1, price: parseFloat(item.price) }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.id === itemId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      ).filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);
  
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const checkout = () => {
    if (cartItems.length === 0) {
      alert('კალათა ცარიელია!');
      return false;
    }
    
    alert(`შეკვეთა ${totalAmount} ₾ წარმატებით გაფორმდა! (ფეიკ ტრანზაქცია TheMealDB-ზე)`);
    clearCart();
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        totalItems,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};