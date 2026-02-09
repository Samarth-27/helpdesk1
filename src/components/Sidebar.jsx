import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiInbox, 
  FiCheckCircle, 
  FiClock, 
  FiAlertCircle,
  FiUser,
  FiSettings,
  FiLogOut,
  FiGrid
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: FiGrid, label: 'Dashboard', path: '/dashboard', badge: null },
    { icon: FiInbox, label: 'All Tickets', path: '/dashboard', badge: '156' },
    { icon: FiAlertCircle, label: 'Open', path: '/dashboard', badge: '45' },
    { icon: FiClock, label: 'In Progress', path: '/dashboard', badge: '32' },
    { icon: FiCheckCircle, label: 'Resolved', path: '/dashboard', badge: '61' },
  ];

  const bottomItems = [
    { icon: FiSettings, label: 'Settings', path: '/settings' },
    { icon: FiLogOut, label: 'Logout', path: '/' },
  ];

  const handleNavigation = (path, label) => {
    if (label === 'Logout') {
      localStorage.removeItem('user');
      navigate('/');
    } else {
      navigate(path);
    }
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <FiUser size={24} />
          </div>
          <span className="logo-text">Helpdesk</span>
        </div>
      </div>

      <div className="sidebar-user">
        <div className="avatar avatar-lg">
          {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'SC'}
        </div>
        <div className="user-info">
          <div className="user-name">{user.name || 'Samarth Jain'}</div>
          <div className="user-role">{user.role || 'Support Agent'}</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={index}>
                <button
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.path, item.label)}
                >
                  <Icon size={20} />
                  <span className="nav-label">{item.label}</span>
                  {item.badge && (
                    <span className="nav-badge">{item.badge}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <ul className="nav-list">
          {bottomItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <li key={index}>
                <button
                  className="nav-item"
                  onClick={() => handleNavigation(item.path, item.label)}
                >
                  <Icon size={20} />
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;