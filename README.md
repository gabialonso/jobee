# 🐝 JoBee Frontend

[English](#english) | [Español](#español)

---

<a name="español"></a>
## 🇪🇸 Español

### 📋 Descripción

**JoBee** es una plataforma web diseñada para conectar jóvenes entre 18 y 27 años con su primera experiencia laboral. La aplicación permite a usuarios y empresas interactuar a través de ofertas de empleo, cursos de capacitación y perfiles personalizados.

### ✨ Características Principales

- 🔐 **Autenticación dual**: Sistema de registro e inicio de sesión separado para usuarios y empresas
- 👤 **Perfiles personalizados**: Gestión de perfiles para candidatos y empresas
- 📚 **Cursos destacados**: Plataforma de cursos para capacitar a jóvenes profesionales
- 🏢 **Panel de empresa**: Gestión de ofertas laborales y candidatos
- 👨‍💼 **Panel de usuario**: Búsqueda de empleos y aplicación a ofertas
- 💬 **Sistema de contactos**: Comunicación entre empresas y candidatos
- 📱 **Diseño responsivo**: Interfaz adaptable a diferentes dispositivos

### 🛠️ Stack Tecnológico

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Enrutamiento**: [React Router 7](https://reactrouter.com/)
- **Iconos**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linter**: [ESLint 9](https://eslint.org/)

### 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0 (o yarn/pnpm)

### 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/galonsoo/jobee-frontend.git
   cd jobee-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### 📜 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar linter
npm run lint

# Vista previa de la compilación
npm run preview
```

### 📁 Estructura del Proyecto

```
jobee-frontend/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables
│   │   ├── Course_Card.jsx
│   │   └── Input_Form.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── company/     # Páginas para empresas
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Contact.jsx
│   │   ├── user/        # Páginas para usuarios
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Company.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Contact.jsx
│   │   ├── Log_In.jsx
│   │   ├── Sign_In_Company.jsx
│   │   ├── Sign_In_User.jsx
│   │   ├── Home.jsx
│   │   └── Constructor.jsx
│   ├── App.jsx          # Componente principal y rutas
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Archivos públicos
├── dist/                # Build de producción
└── package.json         # Dependencias y scripts
```

### 🗺️ Rutas Principales

#### Públicas
- `/` - Redirige a landing page
- `/constructor` - Landing page
- `/home` - Página principal
- `/log_in` - Inicio de sesión
- `/sign_in_user` - Registro de usuario
- `/sign_in_company` - Registro de empresa

#### Usuario
- `/user/home` - Panel de usuario
- `/user/profile` - Perfil de usuario
- `/user/company` - Empresas disponibles
- `/user/courses` - Cursos disponibles
- `/user/contacts` - Contactos

#### Empresa
- `/company/home` - Panel de empresa
- `/company/profile` - Perfil de empresa
- `/company/users` - Candidatos
- `/company/courses` - Cursos publicados
- `/company/contacts` - Contactos

### 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📄 Licencia

Este proyecto está bajo la licencia MIT.

### 📧 Contacto

- **Email**: animajobee@gmail.com
- **Teléfono**: +598 92 502 958
- **Dirección**: Canelones 1564

---

<a name="english"></a>
## 🇬🇧 English

### 📋 Description

**JoBee** is a web platform designed to connect young people between 18 and 27 years old with their first work experience. The application allows users and companies to interact through job offers, training courses, and personalized profiles.

### ✨ Main Features

- 🔐 **Dual authentication**: Separate registration and login system for users and companies
- 👤 **Personalized profiles**: Profile management for candidates and companies
- 📚 **Featured courses**: Course platform to train young professionals
- 🏢 **Company panel**: Job posting and candidate management
- 👨‍💼 **User panel**: Job search and application system
- 💬 **Contact system**: Communication between companies and candidates
- 📱 **Responsive design**: Interface adaptable to different devices

### 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linter**: [ESLint 9](https://eslint.org/)

### 📦 Prerequisites

Before starting, make sure you have installed:

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0 (or yarn/pnpm)

### 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/galonsoo/jobee-frontend.git
   cd jobee-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

### 📁 Project Structure

```
jobee-frontend/
├── src/
│   ├── assets/          # Images and static resources
│   ├── components/      # Reusable components
│   │   ├── Course_Card.jsx
│   │   └── Input_Form.jsx
│   ├── pages/           # Application pages
│   │   ├── company/     # Company pages
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Contact.jsx
│   │   ├── user/        # User pages
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Company.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Contact.jsx
│   │   ├── Log_In.jsx
│   │   ├── Sign_In_Company.jsx
│   │   ├── Sign_In_User.jsx
│   │   ├── Home.jsx
│   │   └── Constructor.jsx
│   ├── App.jsx          # Main component and routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public files
├── dist/                # Production build
└── package.json         # Dependencies and scripts
```

### 🗺️ Main Routes

#### Public
- `/` - Redirects to landing page
- `/constructor` - Landing page
- `/home` - Home page
- `/log_in` - Login
- `/sign_in_user` - User registration
- `/sign_in_company` - Company registration

#### User
- `/user/home` - User dashboard
- `/user/profile` - User profile
- `/user/company` - Available companies
- `/user/courses` - Available courses
- `/user/contacts` - Contacts

#### Company
- `/company/home` - Company dashboard
- `/company/profile` - Company profile
- `/company/users` - Candidates
- `/company/courses` - Published courses
- `/company/contacts` - Contacts

### 🤝 Contributing

Contributions are welcome. For major changes:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is under the MIT License.

### 📧 Contact

- **Email**: animajobee@gmail.com
- **Phone**: +598 92 502 958
- **Address**: Canelones 1564

---

<div align="center">
  Made with ❤️ by the JoBee Team
</div>
