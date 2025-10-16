# 🐝 Jobee Backend

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6+-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**RESTful API connecting young people with their first work experience**

</div>

---

## 📚 Overview

**Jobee Backend** is the RESTful API powering the Jobee platform—a modern web application focused on connecting **young people (ages 18-27)** with **their first job opportunities**. The backend handles user authentication, profiles, courses, job offers, and messaging between users and companies.

Built with **Node.js**, **Express**, and **Prisma ORM**, it uses **MySQL 8.0** for data persistence and is designed to be scalable, modular, and maintainable.

---

## ✨ Main Features

| Category | Description |
|----------|-------------|
| 🔐 **JWT Authentication** | Secure authentication system with JSON Web Tokens |
| 👤 **Profile Management** | Full CRUD for users (Person) and companies (Company) |
| 📚 **Course System** | Create, edit, and list training courses |
| 🏢 **Company Dashboard** | Endpoints for candidate and publication management |
| 💬 **Messaging System** | Chat and contacts between users and companies |
| 🔄 **Prisma ORM** | Automatic migrations and type-safe database access |
| 🐳 **Docker Ready** | Containerized MySQL with docker-compose |
| 🛡️ **Robust Validation** | Input validation and centralized error handling |

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | [Node.js 18+](https://nodejs.org/) |
| **Framework** | [Express 4+](https://expressjs.com/) |
| **Database** | [MySQL 8.0](https://www.mysql.com/) |
| **ORM** | [Prisma 6+](https://www.prisma.io/) |
| **Authentication** | JWT + bcryptjs |
| **Containerization** | Docker + Docker Compose |
| **Linting** | ESLint |

---

## ⚙️ System Requirements

- **Node.js:** ≥ 18.0.0
- **npm:** ≥ 9.0.0 (yarn and pnpm also supported)
- **Docker:** (optional but recommended for MySQL)
- **MySQL 8.0:** (if not using Docker)

---

## 🚀 Installation & Setup

### Option 1: With Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/galonsoo/jobee-backend.git
cd jobee-backend

# 2. Install dependencies
npm install

# 3. Start MySQL with Docker
docker-compose up -d

# 4. Sync Prisma schema with database
npx prisma db push

# 5. (Optional) View tables in Prisma Studio
npx prisma studio

# 6. Start the server
npm run dev
```

### Option 2: With Local MySQL

```bash
# 1-2. Same as option 1

# 3. Make sure MySQL is running on localhost:3306
# 4. Configure .env (if needed to adjust credentials)

# 5. Sync Prisma
npx prisma db push

# 6. Start server
npm run dev
```

The server will be available at: 👉 **http://localhost:3000**

---

## 🔧 Environment Variables

The `.env` file includes:

```env
DATABASE_URL="mysql://proyectousuario:proyectousuario@localhost:3306/proyecto"
PORT=3000
JWT_SECRET=supersecreto123
STRIPE_SECRET_KEY=sk_test_yourKeyHere
OPENAI_API_KEY=sk-proj-...
```

⚠️ **Important:** Change `JWT_SECRET` in production.

---

## 🧩 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start server in production mode |
| `npm run dev` | Start with hot-reload using nodemon |
| `npx prisma studio` | Open visual interface to manage DB |
| `npx prisma db push` | Sync Prisma schema with MySQL |
| `npx prisma generate` | Regenerate Prisma client |

---

## 📁 Project Structure

```
jobee-backend/
├── config/
│   └── db.js                 # Prisma and MySQL configuration
├── controllers/              # Controllers (business logic)
│   ├── authController.js
│   ├── personController.js
│   ├── companyController.js
│   └── courseController.js
├── routes/                   # Route definitions
│   ├── authRoutes.js
│   ├── personRoutes.js
│   ├── companyRoutes.js
│   └── courseRoutes.js
├── services/                 # Services (data access)
│   ├── userService.js
│   ├── personService.js
│   ├── companyService.js
│   └── courseService.js
├── middlewares/              # Middlewares (auth, validation)
│   ├── authMiddleware.js
│   └── adminMiddleware.js
├── prisma/
│   └── schema.prisma         # Data model definition
├── docker-compose.yml        # MySQL Docker configuration
├── .env                      # Environment variables
├── app.js                    # Entry point
└── package.json
```

---

## 🗺️ Main API Endpoints

### Authentication

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/api/auth/login` | Unified login (user/company) | ❌ |
| POST | `/api/auth/register/user` | User registration | ❌ |
| POST | `/api/auth/register/company` | Company registration | ❌ |

### Users (Persons)

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/person/:userId` | Get Person profile by userId | ✅ |
| POST | `/api/person/` | Create Person profile | ✅ |
| PUT | `/api/person/:id` | Update Person profile | ✅ |
| DELETE | `/api/person/:id` | Delete Person profile | ✅ |

### Companies

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/company/` | List all companies | ✅ |
| GET | `/api/company/:userId` | Get Company profile by userId | ✅ |
| POST | `/api/company/` | Create Company profile | ✅ |
| PUT | `/api/company/:id` | Update Company profile | ✅ |
| DELETE | `/api/company/:id` | Delete Company profile | ✅ |

### Courses

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/course/` | List all courses | ❌ |
| GET | `/api/course/:id` | Get specific course | ❌ |
| POST | `/api/course/` | Create course | ✅ |
| PUT | `/api/course/:id` | Update course | ✅ |
| DELETE | `/api/course/:id` | Delete course | ✅ |

---

## 🗄️ Data Model (Prisma Schema)

The project uses **Prisma ORM** with the following main entities:

- **User** - Authentication (email, password, role)
- **Person** - User profile (firstName, lastName, bio, etc.)
- **Company** - Company profile (name, rut, industry, etc.)
- **Course** - Training courses
- **Purchase** - Purchases/enrollments
- **Chat, Message, Contact** - Messaging system
- **Post, Comment, Like** - Social network (future)
- **Admin** - System administrators

See `prisma/schema.prisma` for the complete definition.

---

## 🐳 Docker

The project includes `docker-compose.yml` to easily run MySQL:

```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: jobee-mysql
    environment:
      MYSQL_DATABASE: proyecto
      MYSQL_USER: proyectousuario
      MYSQL_PASSWORD: proyectousuario
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
```

**Useful commands:**
```bash
docker-compose up -d      # Start MySQL
docker-compose down       # Stop MySQL
docker-compose ps         # View status
docker-compose logs       # View logs
```

---

## 🧑‍💻 Development Guide

1. **Create new migration:**
   ```bash
   npx prisma db push
   ```

2. **View database:**
   ```bash
   npx prisma studio
   ```

3. **Add new model:**
   - Edit `prisma/schema.prisma`
   - Run `npx prisma db push`
   - Run `npx prisma generate`

4. **Conventional commits:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `refactor:` - Refactoring
   - `docs:` - Documentation

---

## 🔐 Security

- ✅ Passwords hashed with bcryptjs
- ✅ JWT with configurable expiration
- ✅ CORS configured for localhost:5173
- ✅ Sensitive variables in .env
- ⚠️ Change `JWT_SECRET` in production
- ⚠️ Use HTTPS in production

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
