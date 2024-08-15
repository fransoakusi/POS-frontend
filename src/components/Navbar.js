import React from 'react';

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">POS System</div>
      
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search products..." 
          onChange={handleSearch} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
