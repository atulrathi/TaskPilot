const admin = {
  "id": "admin001",
  "firstname": "Atul Rathi",
  'email': "admin@example.com",
  "password": "123"
}
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Prepare Sales Report",
        "description": "Compile the sales data for Q1 and format it for review.",
        "date": "2025-05-01",
        "category": "Reporting"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "title": "Prepare Sales Report",
        "description": "Compile the sales data for Q1 and format it for review.",
        "date": "2025-05-01",
        "category": "Reporting"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "title": "Update CRM",
        "description": "Ensure all client records are up to date in the CRM.",
        "date": "2025-04-28",
        "category": "Administration"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "title": "Schedule Team Meeting",
        "description": "Arrange and confirm the team meeting with all members.",
        "date": "2025-04-27",
        "category": "Coordination"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 1,
      "complete": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstname": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Client Follow-up",
        "description": "Follow up with clients who attended last week's demo.",
        "date": "2025-05-02",
        "category": "Customer Service"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "title": "Client Follow-up",
        "description": "Follow up with clients who attended last week's demo.",
        "date": "2025-05-02",
        "category": "Customer Service"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "title": "Submit Expense Report",
        "description": "Submit expense details for last month's travel.",
        "date": "2025-04-30",
        "category": "Finance"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "title": "Review Code Merge",
        "description": "Review and approve pull requests from the dev team.",
        "date": "2025-04-25",
        "category": "Development"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 0,
      "complete": 6,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Aadhya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Design Mockups",
        "description": "Create UI mockups for the upcoming client dashboard.",
        "date": "2025-05-03",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "title": "Design Mockups",
        "description": "Create UI mockups for the upcoming client dashboard.",
        "date": "2025-05-03",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "title": "Organize Asset Folder",
        "description": "Clean and organize design assets for easy access.",
        "date": "2025-04-29",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "title": "Client Logo Revision",
        "description": "Revise and finalize client logo based on feedback.",
        "date": "2025-04-26",
        "category": "Design"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 1,
      "complete": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Vivaan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Write Blog Post",
        "description": "Draft a blog post about new features in the product.",
        "date": "2025-05-01",
        "category": "Marketing"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "title": "Write Blog Post",
        "description": "Draft a blog post about new features in the product.",
        "date": "2025-05-01",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "title": "Review Ad Campaign",
        "description": "Analyze the metrics from the last ad campaign.",
        "date": "2025-04-30",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "title": "Newsletter Scheduling",
        "description": "Schedule this month's newsletter for all subscribers.",
        "date": "2025-04-27",
        "category": "Marketing"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 1,
      "complete": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Saanvi",
    "email": "employee5@example.com",
    "password": "123",
    "task_count": {
      "active": 0,
      "new_task": 3,
      "complete": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Conduct Interview",
        "description": "Interview the candidate for the frontend position.",
        "date": "2025-05-04",
        "category": "HR"
      },
      {
        "active": false,
        "new_task": true,
        "complete": false,
        "failed": false,
        "title": "Onboarding Checklist",
        "description": "Complete onboarding checklist for new hire.",
        "date": "2025-04-30",
        "category": "HR"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "title": "Onboarding Checklist",
        "description": "Complete onboarding checklist for new hire.",
        "date": "2025-04-30",
        "category": "HR"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "title": "Policy Update",
        "description": "Update employee handbook with latest remote work policy.",
        "date": "2025-04-28",
        "category": "HR"
      },

    ],
    "task_count": {
      "active": 1,
      "new_task": 1,
      "complete": 1,
      "failed": 1
    }
  }
];





export const setLocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}