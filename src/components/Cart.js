import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span className="item-name">{item.name}</span>
            <span className="item-quantity">x{item.quantity}</span>
            <span className="item-total">$ {(item.price * item.quantity).toFixed(2)}</span>
            <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
