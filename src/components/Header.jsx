import React from 'react';
import { FiSearch, FiMenu, FiBell, FiMail } from 'react-icons/fi';
import './Header.css';

const Header = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle">
          <FiMenu size={20} />
        </button>
        
        <div className="search-bar">
          <FiSearch size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search tickets, customers, or IDs..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-btn">
          <FiMail size={20} />
          <span className="notification-dot"></span>
        </button>
        
        <button className="header-icon-btn">
          <FiBell size={20} />
          <span className="notification-dot"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;