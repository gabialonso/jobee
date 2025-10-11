# 🐝 Jobee Backend
Node.js Express MongoDB License: MIT

Connecting young people with their first work experience

---

## 📚 Overview

**Jobee Backend** is the RESTful API powering the Jobee platform—a modern web application focused on connecting young people (ages 18-27) with their first job opportunities. The backend manages user authentication, job offers, company interactions, course enrollments, and messaging between users and organizations.

Developed with Node.js and Express, this server is designed for performance, scalability, and modularity.

---

## ✨ Main Features

| Category                      | Description                                                       |
|-------------------------------|-------------------------------------------------------------------|
| 🔐 Dual Authentication        | Separate sign-up and login for users and companies                |
| 👤 Profile Management         | Custom dashboards for candidates and organizations                |
| 📚 Training Platform          | Course system for professional development                        |
| 🏢 Company Dashboard          | Job posting and candidate management                              |
| 👨‍💼 User Dashboard           | Job search and application tracking                               |
| 💬 Messaging System           | Direct communication between companies and applicants             |
| 📱 RESTful API                | Easy integration with any frontend or mobile app                  |
| 🛡️ Secure                    | JWT authentication, input validation, and robust error handling   |

---

## 🧱 Tech Stack

| Layer           | Technology          |
|-----------------|--------------------|
| Backend         | Node.js 18+        |
| Framework       | Express 4+         |
| Database        | MongoDB            |
| Authentication  | JWT                |
| Linting         | ESLint 9           |

---

## ⚙️ System Requirements

- **Node.js:** ≥ 18.0.0
- **npm:** ≥ 9.0.0 (Yarn and pnpm also supported)
- **Database:** MongoDB (local or cloud)

---

## 🚀 Installation

```sh
# Clone the repository
git clone https://github.com/galonsoo/jobee-backend.git
cd jobee-backend

# Install dependencies
npm install

# (Optional) Set environment variables in a .env file

# Start the server
npm start

# Or for development with hot reload
npm run dev
```

The API will be available at: 👉 http://localhost:3000

---

## 🧩 Available Scripts

| Command        | Description                              |
|----------------|------------------------------------------|
| npm start      | Start the server in production mode       |
| npm run dev    | Start server with hot reload (nodemon)    |
| npm run lint   | Run ESLint for code analysis and fixes    |
| npm test       | Run backend tests (if available)          |

---

## 📁 Project Structure

```text
jobee-backend/
├── src/
│   ├── controllers/      # Route controllers (business logic)
│   ├── routes/           # Route definitions
│   ├── models/           # Mongoose models (schemas)
│   ├── middlewares/      # Auth, error handling, etc.
│   ├── services/         # Business services/utilities
│   └── utils/            # Helper functions
├── tests/                # Test files
├── .env.example          # Example environment variables
├── package.json          # Dependencies and scripts
└── README.md
```

---

## 🗺️ Main API Endpoints

### Public

| Route            | Description                   |
|------------------|------------------------------|
| GET /api/status  | API health check             |
| POST /api/auth/login | Login for users/companies |
| POST /api/auth/signup/user | User registration   |
| POST /api/auth/signup/company | Company registration |

### User

| Route                     | Description                  |
|---------------------------|-----------------------------|
| GET /api/user/profile     | Get user profile            |
| GET /api/user/jobs        | List available jobs         |
| POST /api/user/apply      | Apply to a job              |
| GET /api/user/courses     | List and enroll in courses  |
| GET /api/user/messages    | User messages inbox         |

### Company

| Route                        | Description                   |
|------------------------------|-------------------------------|
| GET /api/company/profile     | Get company profile           |
| POST /api/company/jobs       | Post a new job offer          |
| GET /api/company/candidates  | List and manage applicants    |
| GET /api/company/courses     | Manage published courses      |
| GET /api/company/messages    | Company messages inbox        |

---

## 🧑‍💻 Development Guide

- Follow ESLint and Prettier rules.
- Use modular and reusable code.
- Commit using conventional messages (`feat:`, `fix:`, `refactor:`, etc).
- Write tests for new features.

---

## 🧾 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📞 Contact

**Email:** animajobee@gmail.com  
**Phone:** +598 92 502 958  
**Address:** Canelones 1564, Uruguay

---

💡 Developed with precision and passion by the Jobee Team
