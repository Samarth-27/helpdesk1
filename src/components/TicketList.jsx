import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FiClock, FiUser, FiPaperclip } from 'react-icons/fi';
import './TicketList.css';

const TicketList = ({ tickets, onTicketClick }) => {
  const getStatusConfig = (status) => {
    const configs = {
      open: { label: 'Open', class: 'badge-warning' },
      in_progress: { label: 'In Progress', class: 'badge-primary' },
      pending: { label: 'Pending', class: 'badge-gray' },
      resolved: { label: 'Resolved', class: 'badge-success' }
    };
    return configs[status] || configs.open;
  };

  const getPriorityConfig = (priority) => {
    const configs = {
      critical: { label: 'Critical', class: 'priority-critical' },
      high: { label: 'High', class: 'priority-high' },
      medium: { label: 'Medium', class: 'priority-medium' },
      low: { label: 'Low', class: 'priority-low' }
    };
    return configs[priority] || configs.medium;
  };

  if (tickets.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No tickets found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => {
        const statusConfig = getStatusConfig(ticket.status);
        const priorityConfig = getPriorityConfig(ticket.priority);
        
        return (
          <div
            key={ticket.id}
            className="ticket-card"
            onClick={() => onTicketClick(ticket.id)}
          >
            <div className="ticket-header">
              <div className="ticket-id-section">
                <span className="ticket-id">{ticket.id}</span>
                <span className={`priority-indicator ${priorityConfig.class}`}>
                  {priorityConfig.label}
                </span>
              </div>
              <span className={`badge ${statusConfig.class}`}>
                {statusConfig.label}
              </span>
            </div>

            <h3 className="ticket-title">{ticket.title}</h3>
            <p className="ticket-description">{ticket.description}</p>

            <div className="ticket-meta">
              <div className="meta-item">
                <FiUser size={14} />
                <span>{ticket.customer.name}</span>
              </div>
              
              <div className="meta-item">
                <FiClock size={14} />
                <span>{formatDistanceToNow(new Date(ticket.created), { addSuffix: true })}</span>
              </div>

              {ticket.attachments && ticket.attachments.length > 0 && (
                <div className="meta-item">
                  <FiPaperclip size={14} />
                  <span>{ticket.attachments.length}</span>
                </div>
              )}
            </div>

            <div className="ticket-footer">
              <div className="assignee">
                <div className="avatar avatar-sm">
                  {ticket.assignee.avatar}
                </div>
                <span>{ticket.assignee.name}</span>
              </div>
              
              <div className="ticket-tags">
                {ticket.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
                {ticket.tags.length > 2 && (
                  <span className="tag">+{ticket.tags.length - 2}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketList;