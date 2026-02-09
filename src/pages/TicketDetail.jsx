import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  FiArrowLeft, 
  FiClock, 
  FiUser, 
  FiPaperclip,
  FiTag,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { mockTickets } from '../data/mockData';
import './TicketDetail.css';

const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = mockTickets.find(t => t.id === id);

  if (!ticket) {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-main">
          <Header searchQuery="" onSearchChange={() => {}} />
          <div className="dashboard-content">
            <div className="empty-state">
              <h2>Ticket not found</h2>
              <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStatusConfig = (status) => {
    const configs = {
      open: { label: 'Open', class: 'badge-warning', icon: FiAlertCircle },
      in_progress: { label: 'In Progress', class: 'badge-primary', icon: FiClock },
      pending: { label: 'Pending', class: 'badge-gray', icon: FiClock },
      resolved: { label: 'Resolved', class: 'badge-success', icon: FiCheckCircle }
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

  const statusConfig = getStatusConfig(ticket.status);
  const priorityConfig = getPriorityConfig(ticket.priority);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="dashboard">
      <Sidebar />
      
      <div className="dashboard-main">
        <Header searchQuery="" onSearchChange={() => {}} />
        
        <div className="dashboard-content">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            <FiArrowLeft size={18} />
            <span>Back to Tickets</span>
          </button>

          <div className="ticket-detail-container">
            <div className="ticket-detail-main">
              <div className="ticket-detail-header">
                <div className="ticket-detail-title-section">
                  <div className="ticket-id-badge">{ticket.id}</div>
                  <h1 className="ticket-detail-title">{ticket.title}</h1>
                </div>
                
                <div className="ticket-detail-actions">
                  <span className={`badge ${statusConfig.class}`}>
                    <StatusIcon size={14} />
                    {statusConfig.label}
                  </span>
                  <span className={`priority-badge ${priorityConfig.class}`}>
                    {priorityConfig.label}
                  </span>
                </div>
              </div>

              <div className="ticket-detail-content">
                <div className="content-section">
                  <h3>Description</h3>
                  <p className="ticket-detail-description">{ticket.description}</p>
                </div>

                {ticket.attachments && ticket.attachments.length > 0 && (
                  <div className="content-section">
                    <h3>
                      <FiPaperclip size={16} />
                      Attachments ({ticket.attachments.length})
                    </h3>
                    <div className="attachments-list">
                      {ticket.attachments.map((file, index) => (
                        <div key={index} className="attachment-item">
                          <FiPaperclip size={16} />
                          <span>{file}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="content-section">
                  <h3>
                    <FiMessageSquare size={16} />
                    Comments ({ticket.comments.length})
                  </h3>
                  <div className="comments-list">
                    {ticket.comments.map((comment) => (
                      <div key={comment.id} className="comment-item">
                        <div className="comment-avatar">
                          {comment.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="comment-content">
                          <div className="comment-header">
                            <span className="comment-author">{comment.author}</span>
                            <span className="comment-time">
                              {format(new Date(comment.timestamp), 'MMM d, yyyy h:mm a')}
                            </span>
                          </div>
                          <p className="comment-text">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="comment-form">
                    <textarea 
                      className="comment-input" 
                      placeholder="Add a comment..."
                      rows="3"
                    />
                    <button className="btn btn-primary">Post Comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ticket-detail-sidebar">
              <div className="sidebar-section">
                <h3>Details</h3>
                <div className="detail-list">
                  <div className="detail-item">
                    <span className="detail-label">Customer</span>
                    <div className="detail-value">
                      <FiUser size={14} />
                      <div>
                        <div className="font-medium">{ticket.customer.name}</div>
                        <div className="text-sm text-muted">{ticket.customer.email}</div>
                        <div className="text-sm text-muted">{ticket.customer.company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Assigned to</span>
                    <div className="detail-value">
                      <div className="avatar avatar-sm">{ticket.assignee.avatar}</div>
                      <div>
                        <div className="font-medium">{ticket.assignee.name}</div>
                        <div className="text-sm text-muted">{ticket.assignee.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Created</span>
                    <div className="detail-value">
                      <FiClock size={14} />
                      <span>{format(new Date(ticket.created), 'MMM d, yyyy h:mm a')}</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Updated</span>
                    <div className="detail-value">
                      <FiClock size={14} />
                      <span>{format(new Date(ticket.updated), 'MMM d, yyyy h:mm a')}</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Due Date</span>
                    <div className="detail-value">
                      <FiClock size={14} />
                      <span>{format(new Date(ticket.dueDate), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>
                  <FiTag size={16} />
                  Tags
                </h3>
                <div className="tags-list">
                  {ticket.tags.map((tag, index) => (
                    <span key={index} className="tag-item">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <button className="btn btn-primary btn-block">Update Status</button>
                <button className="btn btn-secondary btn-block">Reassign</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;