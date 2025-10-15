# 🐝 Jobee Frontend

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**Modern web app connecting young people with their first work experience**

</div>

---

## 📚 Overview

**Jobee Frontend** is a modern, responsive web application focused on connecting **young people (ages 18-27)** with **their first job opportunities**. The platform enables interaction between **users and companies** through **job offers**, **training courses**, and **personalized profiles**.

Built with **React 19**, **Vite 7**, and **Tailwind CSS 4**, it's optimized for **performance**, **modularity**, and **scalability**.

---

## ✨ Main Features

| Category | Description |
|----------|-------------|
| 🔐 **Dual Authentication** | Separate registration and login for users and companies |
| 👤 **Profile Management** | Personalized dashboards for candidates and organizations |
| 📚 **Training Platform** | Course system for professional development |
| 🏢 **Company Dashboard** | Job posting and candidate management |
| 👨‍💼 **User Dashboard** | Job search and application tracking |
| 💬 **Messaging System** | Direct communication between companies and applicants |
| 📱 **Responsive Design** | Adaptive interface for multiple devices |
| 🔄 **Backend Integration** | Full integration with RESTful API |

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Routing** | [React Router 7](https://reactrouter.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **HTTP Client** | Fetch API (custom wrapper) |
| **Linting** | [ESLint 9](https://eslint.org/) |

---

## ⚙️ System Requirements

- **Node.js:** ≥ 18.0.0
- **npm:** ≥ 9.0.0 (yarn and pnpm also supported)
- **Supported browsers:** Latest versions of Chrome, Firefox, Edge, and Safari
- **Backend:** Jobee Backend running on http://localhost:3000

---

## 🚀 Installation & Setup

### Full Stack Setup (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/galonsoo/jobee-frontend.git
cd jobee-frontend

# 2. Install dependencies
npm install

# 3. Make sure backend is running (see jobee-backend README)
# Backend should be running on http://localhost:3000

# 4. Start development server
npm run dev
```

The application will be available at: 👉 **http://localhost:5173**

### Frontend Only Setup

```bash
# 1-2. Same as above

# 3. (Optional) Configure API URL in src/utils/api.js
# Default: http://localhost:3000/api

# 4. Start development server
npm run dev
```

---

## 🔧 Configuration

The frontend connects to the backend via `src/utils/api.js`:

```javascript
// Default API base URL
const API_BASE_URL = 'http://localhost:3000/api';
```

To change the backend URL, edit this file before building for production.

---

## 🧩 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Generate optimized production bundle |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint for code analysis and fixes |

---

## 📁 Project Structure

```
jobee-frontend/
├── src/
│   ├── assets/              # Static resources (images, icons)
│   ├── components/          # Reusable components
│   │   ├── common/          # Common components (Header, ProtectedRoute)
│   │   ├── auth/            # Auth components (AuthLayout)
│   │   └── courses/         # Course components (CourseCard)
│   ├── pages/               # Main application pages
│   │   ├── auth/            # Authentication (Login, Signup)
│   │   ├── public/          # Public pages (Home, Splash)
│   │   ├── company/         # Company dashboard
│   │   └── user/            # User dashboard
│   ├── utils/               # Utility functions
│   │   ├── api.js           # API fetch wrapper
│   │   └── auth.js          # Authentication utilities
│   ├── App.jsx              # Route configuration and layout
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Public static files
├── dist/                    # Production build output
└── package.json             # Dependencies and scripts
```

---

## 🗺️ Main Routes

### Public Routes

| Route | Description | Auth |
|-------|-------------|------|
| `/` | Landing page | ❌ |
| `/splash` | Welcome page | ❌ |
| `/auth/login` | Login page | ❌ |
| `/auth/signup/user` | User registration | ❌ |
| `/auth/signup/company` | Company registration | ❌ |

### User Routes (Protected)

| Route | Description | Auth |
|-------|-------------|------|
| `/user/dashboard` | User main dashboard | ✅ |
| `/user/profile` | User profile management | ✅ |
| `/user/company` | Company listings | ✅ |
| `/user/courses` | Available courses | ✅ |
| `/user/contacts` | Contact system | ✅ |

### Company Routes (Protected)

| Route | Description | Auth |
|-------|-------------|------|
| `/company/dashboard` | Company main dashboard | ✅ |
| `/company/profile` | Company profile management | ✅ |
| `/company/users` | Candidate management | ✅ |
| `/company/courses` | Published courses management | ✅ |
| `/company/contacts` | Contact with applicants | ✅ |

---

## 🔐 Authentication

The frontend implements JWT-based authentication:

- **Login:** Users/companies authenticate via `/api/auth/login`
- **Token Storage:** JWT token stored in `localStorage`
- **Protected Routes:** `ProtectedRoute` component wraps private routes
- **Auto-redirect:** Unauthorized access redirects to `/auth/login`
- **Logout:** Clears session and redirects to home

See `src/utils/auth.js` and `src/components/common/ProtectedRoute.jsx` for implementation details.

---

## 🎨 Styling

The project uses **Tailwind CSS 4** with custom configuration:

- **Responsive design:** Mobile-first approach
- **Custom colors:** Brand colors defined in `tailwind.config.js`
- **Dark mode:** Ready for implementation
- **Component classes:** Utility-first approach
- **No inline styles:** All styling via Tailwind classes

---

## 🧑‍💻 Development Guide

1. **Creating new components:**
   - Place in appropriate folder (`common/`, `auth/`, `courses/`)
   - Use functional components with hooks
   - Follow existing naming conventions

2. **Adding new routes:**
   - Define route in `App.jsx`
   - Wrap with `ProtectedRoute` if auth required
   - Create corresponding page component

3. **API integration:**
   - Use `apiFetch()` from `src/utils/api.js`
   - Token automatically included for authenticated requests
   - Error handling centralized

4. **Conventional commits:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `refactor:` - Refactoring
   - `style:` - Styling changes
   - `docs:` - Documentation

---

## 🔗 Integration with Backend

The frontend integrates with [Jobee Backend](https://github.com/galonsoo/jobee-backend):

**API Utilities:**
- `src/utils/api.js` - HTTP request wrapper
- `src/utils/auth.js` - Session management

**Key Functions:**
```javascript
// Making API requests
apiFetch('/auth/login', {
  method: 'POST',
  body: { email, password }
});

// Session management
saveSession(token, user);
isAuthenticated();
logout();
```

---

## 🚀 Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy dist/ folder to your hosting service
```

The `dist/` folder contains the optimized production build.

---

## 🧾 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more information.

---

## 📞 Contact

- **Email:** [animajobee@gmail.com](mailto:animajobee@gmail.com)
- **Phone:** +598 92 502 958
- **Address:** Canelones 1564, Uruguay

---

<div align="center">

💡 **Developed with precision and passion by the Jobee Team**

</div>
