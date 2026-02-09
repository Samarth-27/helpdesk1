import React from 'react';
import { FiInbox, FiClock, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import './StatsCards.css';

const StatsCards = ({ stats }) => {
  const cards = [
    {
      icon: FiInbox,
      label: 'Total Tickets',
      value: stats.total,
      color: 'blue',
      bgColor: 'var(--primary-50)',
      iconColor: 'var(--primary-600)'
    },
    {
      icon: FiAlertCircle,
      label: 'Open',
      value: stats.open,
      color: 'orange',
      bgColor: 'var(--warning-light)',
      iconColor: '#ea580c'
    },
    {
      icon: FiClock,
      label: 'In Progress',
      value: stats.inProgress,
      color: 'purple',
      bgColor: '#f3e8ff',
      iconColor: '#9333ea'
    },
    {
      icon: FiCheckCircle,
      label: 'Resolved',
      value: stats.resolved,
      color: 'green',
      bgColor: 'var(--success-light)',
      iconColor: '#059669'
    }
  ];

  return (
    <div className="stats-cards">
      {cards.map((card, index) => {
        const Icon = card.icon;
        
        return (
          <div key={index} className="stat-card">
            <div 
              className="stat-icon"
              style={{ background: card.bgColor }}
            >
              <Icon size={24} style={{ color: card.iconColor }} />
            </div>
            <div className="stat-content">
              <div className="stat-label">{card.label}</div>
              <div className="stat-value">{card.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;