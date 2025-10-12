# 🐝 Jobee Frontend

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**Conectando jóvenes con su primera experiencia laboral**

</div>

---

## 📚 Descripción General

**JoBee** es una aplicación web moderna y responsiva, orientada a conectar **jóvenes entre 18 y 27 años** con **su primera oportunidad laboral**.
La plataforma permite la interacción entre **usuarios y empresas** mediante **ofertas de empleo**, **cursos de formación** y **perfiles personalizados**.

Desarrollada con **React 19**, **Vite 7** y **Tailwind CSS 4**, está optimizada para ofrecer **rendimiento**, **modularidad** y **escalabilidad**.

---

## ✨ Características Principales

| Categoría | Descripción |
|-----------|--------------|
| 🔐 **Autenticación dual** | Registro e inicio de sesión separados para usuarios y empresas. |
| 👤 **Gestión de perfiles** | Paneles personalizados para candidatos y organizaciones. |
| 📚 **Plataforma de capacitación** | Sistema de cursos para formación y desarrollo profesional. |
| 🏢 **Panel empresarial** | Publicación de ofertas y gestión de candidatos. |
| 👨‍💼 **Panel de usuario** | Búsqueda y postulación a empleos. |
| 💬 **Sistema de mensajería** | Comunicación directa entre empresas y postulantes. |
| 📱 **Diseño responsivo** | Interfaz adaptable a múltiples dispositivos. |

---

## 🧱 Stack Tecnológico

| Capa | Tecnología |
|------|-------------|
| **Framework Frontend** | [React 19](https://react.dev/) |
| **Herramienta de Build** | [Vite 7](https://vitejs.dev/) |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Ruteo** | [React Router 7](https://reactrouter.com/) |
| **Iconografía** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Linter** | [ESLint 9](https://eslint.org/) |

---

## ⚙️ Requisitos del Sistema

- **Node.js:** ≥ 18.0.0
- **npm:** ≥ 9.0.0 *(también compatible con yarn/pnpm)*
- **Navegadores soportados:** Últimas versiones de Chrome, Firefox, Edge y Safari

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/galonsoo/jobee-frontend.git
cd jobee-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Luego abre la aplicación en:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Scripts Disponibles

| Comando | Descripción |
|----------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera el paquete de producción optimizado. |
| `npm run preview` | Sirve la compilación de producción localmente. |
| `npm run lint` | Ejecuta ESLint para análisis y corrección de código. |

---

## 📁 Estructura del Proyecto

```
jobee-frontend/
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, íconos)
│   ├── components/          # Componentes reutilizables
│   │   ├── common/          # Componentes comunes (header, inputs, etc.)
│   │   └── courses/         # Componentes de cursos (CourseCard)
│   ├── pages/               # Páginas principales de la app
│   │   ├── auth/            # Autenticación (Login, Signup)
│   │   ├── public/          # Páginas públicas (Home, Splash)
│   │   ├── company/         # Panel de empresa
│   │   └── user/            # Panel de usuario
│   ├── App.jsx              # Configuración de rutas y layout
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos públicos
├── dist/                    # Compilación de producción
└── package.json             # Dependencias y scripts
```

---

## 🗺️ Rutas Principales

### **Públicas**
| Ruta | Descripción |
|------|--------------|
| `/` | Página principal |
| `/splash` | Página de bienvenida |

### **Autenticación**
| Ruta | Descripción |
|------|--------------|
| `/auth/login` | Inicio de sesión |
| `/auth/signup/user` | Registro de usuario |
| `/auth/signup/company` | Registro de empresa |

### **Usuario**
| Ruta | Descripción |
|------|--------------|
| `/user/dashboard` | Panel principal del usuario |
| `/user/profile` | Perfil del usuario |
| `/user/company` | Listado de empresas |
| `/user/courses` | Cursos disponibles |
| `/user/contacts` | Sistema de contactos |

### **Empresa**
| Ruta | Descripción |
|------|--------------|
| `/company/dashboard` | Panel principal de la empresa |
| `/company/profile` | Perfil de empresa |
| `/company/users` | Gestión de candidatos |
| `/company/courses` | Gestión de cursos publicados |
| `/company/contacts` | Contacto con postulantes |

---

## 🧑‍💻 Guía de Desarrollo

- Seguir las reglas de **ESLint** y **Prettier**.
- Usar **componentes funcionales**.
- Mantener **mensajes de commit convencionales** (`feat:`, `fix:`, `refactor:`, etc.).

---

## 🧾 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
Consulta el archivo [LICENSE](./LICENSE) para más información.

---

## 📞 Contacto

- **Email:** [animajobee@gmail.com](mailto:animajobee@gmail.com)
- **Teléfono:** +598 92 502 958
- **Dirección:** Canelones 1564, Uruguay

---

<div align="center">

💡 Desarrollado con precisión y pasión por el **Equipo de Jobee**

</div>
