import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketList from '../components/TicketList';
import StatsCards from '../components/StatsCards';
import { mockTickets, mockStats } from '../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const filteredTickets = mockTickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleTicketClick = (ticketId) => {
    navigate(`/ticket/${ticketId}`);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      
      <div className="dashboard-main">
        <Header 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Tickets</h1>
              <p className="dashboard-subtitle">Manage and track support tickets</p>
            </div>
          </div>

          <StatsCards stats={mockStats} />

          <div className="filters-section">
            <div className="filter-group">
              <label>Status</label>
              <select 
                className="filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Priority</label>
              <select 
                className="filter-select"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="all">All Priority</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="filter-results">
              Showing {filteredTickets.length} of {mockTickets.length} tickets
            </div>
          </div>

          <TicketList 
            tickets={filteredTickets}
            onTicketClick={handleTicketClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;