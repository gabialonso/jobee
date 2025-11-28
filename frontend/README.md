# 🐝 Jobee Frontend

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**Aplicación web moderna que conecta jóvenes con su primera experiencia laboral**

</div>

---

## 📚 Descripción

**Jobee Frontend** es una aplicación web moderna y responsiva enfocada en conectar **jóvenes (18-24 años)** con **sus primeras oportunidades laborales**. La plataforma permite la interacción entre **usuarios y empresas** a través de **ofertas de trabajo**, **cursos de capacitación** y **perfiles personalizados**.

Construida con **React 19**, **Vite 7** y **Tailwind CSS 4**, está optimizada para **rendimiento**, **modularidad** y **escalabilidad**.

---

## 🚀 Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js:** ≥ 18.0.0
- **npm:** ≥ 9.0.0 (también soporta yarn y pnpm)
- **Git:** Última versión
- **Backend:** [Jobee Backend](https://github.com/galonsoo/jobee-backend) corriendo en http://localhost:3000

Verifica tus versiones de Node.js y npm:

```bash
node --version
npm --version
```

---

## ✨ Características Principales

| Categoría | Descripción |
|-----------|-------------|
| 🔐 **Autenticación Dual** | Registro e inicio de sesión separado para usuarios y empresas |
| 👤 **Gestión de Perfiles** | Dashboards personalizados para candidatos y organizaciones |
| 📚 **Plataforma de Capacitación** | Sistema de cursos para desarrollo profesional |
| 🏢 **Panel de Empresa** | Publicación de ofertas y gestión de candidatos |
| 👨‍💼 **Panel de Usuario** | Búsqueda de empleos y seguimiento de postulaciones |
| 💬 **Sistema de Mensajería** | Comunicación directa entre empresas y postulantes |
| 📱 **Diseño Responsivo** | Interfaz adaptable para múltiples dispositivos |
| 🔄 **Integración con Backend** | Integración completa con API RESTful |

---

## 🔧 Instalación

### Instalación Completa (Recomendada)

```bash
# 1. Clonar el repositorio
git clone https://github.com/galonsoo/jobee-frontend.git
cd jobee-frontend

# 2. Instalar dependencias
npm install

# 3. Asegúrate de que el backend esté corriendo (ver README de jobee-backend)
# El backend debe estar corriendo en http://localhost:3000

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en: 👉 **http://localhost:5173**

### Instalación Solo Frontend

```bash
# 1-2. Igual que arriba

# 3. (Opcional) Configurar URL de la API en src/utils/api.js
# Por defecto: http://localhost:3000/api

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## ⚙️ Configuración

El frontend se conecta al backend a través de `src/utils/api.js`:

```javascript
// URL base de la API por defecto
const API_BASE_URL = 'http://localhost:3000/api';
```

Para cambiar la URL del backend, edita este archivo antes de construir para producción.

---

## 🛠️ Construido Con

| Capa | Tecnología |
|------|------------|
| **Framework Frontend** | [React 19](https://react.dev/) |
| **Herramienta de Build** | [Vite 7](https://vitejs.dev/) |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Enrutamiento** | [React Router 7](https://reactrouter.com/) |
| **Iconos** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Cliente HTTP** | Fetch API (wrapper personalizado) |
| **Linting** | [ESLint 9](https://eslint.org/) |

---

## 🧩 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Genera build optimizado para producción |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para análisis y corrección de código |

---

## 📁 Estructura del Proyecto

```
jobee-frontend/
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, iconos)
│   ├── components/          # Componentes reutilizables
│   │   ├── common/          # Componentes comunes (Header, ProtectedRoute)
│   │   ├── auth/            # Componentes de autenticación (AuthLayout)
│   │   └── courses/         # Componentes de cursos (CourseCard)
│   ├── pages/               # Páginas principales de la aplicación
│   │   ├── auth/            # Autenticación (Login, Signup)
│   │   ├── public/          # Páginas públicas (Home, Splash)
│   │   ├── company/         # Dashboard de empresa
│   │   └── user/            # Dashboard de usuario
│   ├── utils/               # Funciones utilitarias
│   │   ├── api.js           # Wrapper de fetch para API
│   │   └── auth.js          # Utilidades de autenticación
│   ├── App.jsx              # Configuración de rutas y layout
│   ├── main.jsx             # Punto de entrada de la aplicación
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos públicos
├── dist/                    # Build de producción
└── package.json             # Dependencias y scripts
```

---

## 🗺️ Rutas Principales

### Rutas Públicas

| Ruta | Descripción | Auth |
|------|-------------|------|
| `/` | Página de inicio | ❌ |
| `/splash` | Página de bienvenida | ❌ |
| `/auth/login` | Página de inicio de sesión | ❌ |
| `/auth/signup/user` | Registro de usuario | ❌ |
| `/auth/signup/company` | Registro de empresa | ❌ |

### Rutas de Usuario (Protegidas)

| Ruta | Descripción | Auth |
|------|-------------|------|
| `/user/dashboard` | Dashboard principal del usuario | ✅ |
| `/user/profile` | Gestión de perfil de usuario | ✅ |
| `/user/company` | Listado de empresas | ✅ |
| `/user/courses` | Cursos disponibles | ✅ |
| `/user/contacts` | Sistema de contactos | ✅ |

### Rutas de Empresa (Protegidas)

| Ruta | Descripción | Auth |
|------|-------------|------|
| `/company/dashboard` | Dashboard principal de empresa | ✅ |
| `/company/profile` | Gestión de perfil de empresa | ✅ |
| `/company/users` | Gestión de candidatos | ✅ |
| `/company/courses` | Gestión de cursos publicados | ✅ |
| `/company/contacts` | Contacto con postulantes | ✅ |

---

## 🔐 Autenticación

El frontend implementa autenticación basada en JWT:

- **Login:** Usuarios/empresas se autentican vía `/api/auth/login`
- **Almacenamiento de Token:** Token JWT almacenado en `localStorage`
- **Rutas Protegidas:** Componente `ProtectedRoute` envuelve rutas privadas
- **Auto-redirección:** Acceso no autorizado redirige a `/auth/login`
- **Logout:** Limpia la sesión y redirige a inicio

Ver `src/utils/auth.js` y `src/components/common/ProtectedRoute.jsx` para detalles de implementación.

---

## 🎨 Estilos

El proyecto utiliza **Tailwind CSS 4** con configuración personalizada:

- **Diseño responsivo:** Enfoque mobile-first
- **Colores personalizados:** Colores de marca definidos en `tailwind.config.js`
- **Modo oscuro:** Listo para implementación
- **Clases de componentes:** Enfoque utility-first
- **Sin estilos inline:** Todo el estilado vía clases de Tailwind

---

## 🧑‍💻 Guía de Desarrollo

1. **Crear nuevos componentes:**
   - Colocar en la carpeta apropiada (`common/`, `auth/`, `courses/`)
   - Usar componentes funcionales con hooks
   - Seguir las convenciones de nombres existentes

2. **Agregar nuevas rutas:**
   - Definir ruta en `App.jsx`
   - Envolver con `ProtectedRoute` si requiere autenticación
   - Crear el componente de página correspondiente

3. **Integración con API:**
   - Usar `apiFetch()` desde `src/utils/api.js`
   - Token incluido automáticamente para requests autenticados
   - Manejo de errores centralizado

4. **Commits convencionales:**
   - `feat:` - Nueva característica
   - `fix:` - Corrección de bug
   - `refactor:` - Refactorización
   - `style:` - Cambios de estilos
   - `docs:` - Documentación

---

## 🔗 Integración con Backend

El frontend se integra con [Jobee Backend](https://github.com/galonsoo/jobee-backend):

**Utilidades de API:**
- `src/utils/api.js` - Wrapper de requests HTTP
- `src/utils/auth.js` - Gestión de sesiones

**Funciones Principales:**
```javascript
// Realizar requests a la API
apiFetch('/auth/login', {
  method: 'POST',
  body: { email, password }
});

// Gestión de sesiones
saveSession(token, user);
isAuthenticated();
logout();
```

---

## 📦 Despliegue

```bash
# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Despliega la carpeta dist/ en tu servicio de hosting
```

La carpeta `dist/` contiene el build de producción optimizado.

---

## 👥 Autores

Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios:

- **Equipo Jobee** - Desarrollo inicial y mantenimiento

También puedes mirar la lista de todos los [contribuyentes](https://github.com/galonsoo/jobee-frontend/contributors) que han participado en este proyecto.

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.
Consulta el archivo [LICENSE](./LICENSE) para más información.

---

## 📞 Contacto

- **Email:** [animajobee@gmail.com](mailto:animajobee@gmail.com)
- **Teléfono:** +598 92 502 958
- **Dirección:** Canelones 1162, Uruguay

---

<div align="center">

**Desarrollado con precisión y pasión por el equipo de Jobee** 💼

</div>
