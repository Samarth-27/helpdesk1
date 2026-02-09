import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        name: 'Sarah Chen',
        email: formData.email,
        role: 'Support Agent'
      }));
      navigate('/dashboard');
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-branding">
            <div className="logo">
              <div className="logo-icon">
                <FiUser size={32} />
              </div>
              <h1>Helpdesk</h1>
            </div>
            <p className="tagline">Streamline your support operations</p>
          </div>
          
          <div className="login-illustration">
            <div className="illustration-card card-1">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="stat-bar"></div>
                <div className="stat-bar short"></div>
                <div className="stat-bar medium"></div>
              </div>
            </div>
            <div className="illustration-card card-2">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div className="card-text">
                <div className="text-line"></div>
                <div className="text-line short"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Sign in to access your helpdesk</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">
                  <FiMail size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="demo@helpdesk.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <FiLock size={16} />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                  placeholder="password123"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="login-footer">
              <p>Demo credentials: Any email/password will work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;