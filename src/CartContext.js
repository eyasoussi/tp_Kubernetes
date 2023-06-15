import React, { createContext, useState } from 'react';
// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  // Context value to be provided
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  // Provide the cart items and functions to descendant components
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};