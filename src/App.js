import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './assets/styles.css';
import image1 from './assets/images/product4.jpg';
import image2 from './assets/images/product5.jpg';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: image1 },
    { id: 2, name: 'Product 2', price: 15, image: image2 },
    { id: 3, name: 'Product 3', price: 20, image: image1 },
    { id: 4, name: 'Product 4', price: 20, image: image2 },
    { id: 5, name: 'Product 1', price: 10, image: image1 },
    { id: 6, name: 'Product 2', price: 15, image: image2 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems
      .map(item => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item))
      .filter(item => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Header />
      <div className="container">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <Checkout cartItems={cartItems} total={total} clearCart={clearCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
