export const mockTickets = [
  {
    id: "TKT-1001",
    title: "Login authentication not working on mobile devices",
    description: "Users are reporting issues logging in through the mobile app. The authentication fails with a 401 error after entering correct credentials.",
    status: "open",
    priority: "high",
    assignee: {
      name: "Sarah Chen",
      avatar: "SC",
      email: "sarah.chen@company.com"
    },
    customer: {
      name: "John Miller",
      email: "john.miller@customer.com",
      company: "TechCorp Inc"
    },
    created: "2026-02-08T10:30:00Z",
    updated: "2026-02-08T14:20:00Z",
    dueDate: "2026-02-10T17:00:00Z",
    tags: ["authentication", "mobile", "urgent"],
    comments: [
      {
        id: 1,
        author: "Sarah Chen",
        content: "I've reproduced the issue on iOS 16. Investigating the token refresh mechanism.",
        timestamp: "2026-02-08T11:45:00Z"
      },
      {
        id: 2,
        author: "Mike Rodriguez",
        content: "This might be related to the recent API update. Let me check the logs.",
        timestamp: "2026-02-08T13:10:00Z"
      }
    ],
    attachments: ["error-log.txt", "screenshot.png"]
  },
  {
    id: "TKT-1002",
    title: "Feature request: Dark mode for dashboard",
    description: "Multiple users have requested a dark mode option for the main dashboard. This would improve usability during nighttime hours.",
    status: "in_progress",
    priority: "medium",
    assignee: {
      name: "Alex Thompson",
      avatar: "AT",
      email: "alex.thompson@company.com"
    },
    customer: {
      name: "Emma Wilson",
      email: "emma.wilson@customer.com",
      company: "Design Studio"
    },
    created: "2026-02-07T09:15:00Z",
    updated: "2026-02-08T16:30:00Z",
    dueDate: "2026-02-15T17:00:00Z",
    tags: ["feature", "ui/ux", "enhancement"],
    comments: [
      {
        id: 1,
        author: "Alex Thompson",
        content: "Started working on the CSS variables approach. Will have a prototype ready by EOD.",
        timestamp: "2026-02-08T10:20:00Z"
      }
    ],
    attachments: []
  },
  {
    id: "TKT-1003",
    title: "Payment processing delay for subscription renewals",
    description: "Customers are experiencing delays in payment processing for monthly subscription renewals. Some payments are taking up to 48 hours to process.",
    status: "open",
    priority: "critical",
    assignee: {
      name: "David Park",
      avatar: "DP",
      email: "david.park@company.com"
    },
    customer: {
      name: "Robert Chang",
      email: "robert.chang@customer.com",
      company: "Enterprise Solutions"
    },
    created: "2026-02-08T08:00:00Z",
    updated: "2026-02-08T15:45:00Z",
    dueDate: "2026-02-09T12:00:00Z",
    tags: ["payment", "billing", "critical"],
    comments: [
      {
        id: 1,
        author: "David Park",
        content: "Escalating to payment processor team. This needs immediate attention.",
        timestamp: "2026-02-08T09:30:00Z"
      },
      {
        id: 2,
        author: "Lisa Martinez",
        content: "Payment team confirmed there's a queue backup. Working on resolution.",
        timestamp: "2026-02-08T12:15:00Z"
      }
    ],
    attachments: ["payment-logs.csv"]
  },
  {
    id: "TKT-1004",
    title: "Unable to export reports to PDF format",
    description: "The export to PDF functionality is broken. Users get a blank PDF when trying to export monthly reports.",
    status: "pending",
    priority: "medium",
    assignee: {
      name: "Sarah Chen",
      avatar: "SC",
      email: "sarah.chen@company.com"
    },
    customer: {
      name: "Jessica Taylor",
      email: "jessica.taylor@customer.com",
      company: "Analytics Pro"
    },
    created: "2026-02-06T14:20:00Z",
    updated: "2026-02-07T11:10:00Z",
    dueDate: "2026-02-12T17:00:00Z",
    tags: ["reports", "export", "bug"],
    comments: [
      {
        id: 1,
        author: "Sarah Chen",
        content: "Waiting for customer to provide sample report data for testing.",
        timestamp: "2026-02-07T09:00:00Z"
      }
    ],
    attachments: []
  },
  {
    id: "TKT-1005",
    title: "Slow loading time on inventory page",
    description: "The inventory management page takes over 15 seconds to load when there are more than 1000 items.",
    status: "resolved",
    priority: "low",
    assignee: {
      name: "Mike Rodriguez",
      avatar: "MR",
      email: "mike.rodriguez@company.com"
    },
    customer: {
      name: "Thomas Brown",
      email: "thomas.brown@customer.com",
      company: "Warehouse Systems"
    },
    created: "2026-02-05T10:30:00Z",
    updated: "2026-02-08T13:25:00Z",
    dueDate: "2026-02-14T17:00:00Z",
    tags: ["performance", "optimization"],
    comments: [
      {
        id: 1,
        author: "Mike Rodriguez",
        content: "Implemented pagination and lazy loading. Load time reduced to under 2 seconds.",
        timestamp: "2026-02-08T13:25:00Z"
      }
    ],
    attachments: ["performance-report.pdf"]
  },
  {
    id: "TKT-1006",
    title: "Email notifications not being sent",
    description: "System email notifications for new messages and updates are not being delivered to users.",
    status: "open",
    priority: "high",
    assignee: {
      name: "Lisa Martinez",
      avatar: "LM",
      email: "lisa.martinez@company.com"
    },
    customer: {
      name: "Amanda Green",
      email: "amanda.green@customer.com",
      company: "Communication Hub"
    },
    created: "2026-02-08T07:45:00Z",
    updated: "2026-02-08T16:00:00Z",
    dueDate: "2026-02-09T17:00:00Z",
    tags: ["email", "notifications", "urgent"],
    comments: [
      {
        id: 1,
        author: "Lisa Martinez",
        content: "SMTP server issue identified. Working with infrastructure team.",
        timestamp: "2026-02-08T14:30:00Z"
      }
    ],
    attachments: []
  },
  {
    id: "TKT-1007",
    title: "Request for API rate limit increase",
    description: "Customer needs API rate limit increased from 1000 to 5000 requests per hour for their integration.",
    status: "in_progress",
    priority: "medium",
    assignee: {
      name: "Alex Thompson",
      avatar: "AT",
      email: "alex.thompson@company.com"
    },
    customer: {
      name: "Kevin Liu",
      email: "kevin.liu@customer.com",
      company: "Integration Partners"
    },
    created: "2026-02-07T15:30:00Z",
    updated: "2026-02-08T10:15:00Z",
    dueDate: "2026-02-11T17:00:00Z",
    tags: ["api", "configuration", "enterprise"],
    comments: [
      {
        id: 1,
        author: "Alex Thompson",
        content: "Reviewing customer's usage patterns. Will update limits after security check.",
        timestamp: "2026-02-08T10:15:00Z"
      }
    ],
    attachments: ["api-usage-stats.xlsx"]
  },
  {
    id: "TKT-1008",
    title: "Data synchronization issue between mobile and web",
    description: "Changes made on mobile app are not syncing to web version and vice versa.",
    status: "open",
    priority: "high",
    assignee: {
      name: "David Park",
      avatar: "DP",
      email: "david.park@company.com"
    },
    customer: {
      name: "Michelle Adams",
      email: "michelle.adams@customer.com",
      company: "Mobile First Inc"
    },
    created: "2026-02-08T11:20:00Z",
    updated: "2026-02-08T15:10:00Z",
    dueDate: "2026-02-10T17:00:00Z",
    tags: ["sync", "mobile", "data"],
    comments: [],
    attachments: ["sync-error.log"]
  }
];

export const mockUsers = [
  { id: 1, name: "Sarah Chen", avatar: "SC", role: "Senior Support Engineer", status: "online" },
  { id: 2, name: "Alex Thompson", avatar: "AT", role: "Support Specialist", status: "online" },
  { id: 3, name: "David Park", avatar: "DP", role: "Technical Support Lead", status: "busy" },
  { id: 4, name: "Mike Rodriguez", avatar: "MR", role: "Support Engineer", status: "away" },
  { id: 5, name: "Lisa Martinez", avatar: "LM", role: "Support Specialist", status: "online" }
];

export const mockStats = {
  total: 156,
  open: 45,
  inProgress: 32,
  pending: 18,
  resolved: 61
};