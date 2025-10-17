import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
// ============================= Public Pages =============================
import SplashPage from "./pages/public/SplashPage.jsx";
import HomePage from "./pages/public/HomePage.jsx";
// ============================= Auth Pages =============================
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpCompanyPage from "./pages/auth/SignUpCompanyPage.jsx";
import SignUpUserPage from "./pages/auth/SignUpUserPage.jsx";
// ============================= User Pages =============================
import UserDashboard from "./pages/user/UserDashboard.jsx";
import UserProfile from "./pages/user/Profile.jsx";
import UserCompany from "./pages/user/Company.jsx";
import UserContacts from "./pages/user/Contact.jsx";
import UserCourses from "./pages/user/Courses.jsx";
// ============================= Company Pages =============================
import CompanyDashboard from "./pages/company/CompanyDashboard.jsx";
import CompanyProfile from "./pages/company/Profile.jsx";
import CompanyUsers from "./pages/company/Users.jsx";
import CompanyContacts from "./pages/company/Contact.jsx";
import CompanyCourses from "./pages/company/Courses.jsx";

// ============================= 404 Page =============================
function NotFound() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <Link to="/" className="text-blue-600 underline">
        Volver al inicio
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/splash" element={<SplashPage />} />

      {/* Auth routes */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup/company" element={<SignUpCompanyPage />} />
      <Route path="/auth/signup/user" element={<SignUpUserPage />} />

      {/* User routes - Protected */}
      <Route path="/user/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
      <Route path="/user/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path="/user/company" element={<ProtectedRoute><UserCompany /></ProtectedRoute>} />
      <Route path="/user/contacts" element={<ProtectedRoute><UserContacts /></ProtectedRoute>} />
      <Route path="/user/courses" element={<ProtectedRoute><UserCourses /></ProtectedRoute>} />

      {/* Company routes - Protected */}
      <Route path="/company/dashboard" element={<ProtectedRoute><CompanyDashboard /></ProtectedRoute>} />
      <Route path="/company/profile" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/company/users" element={<ProtectedRoute><CompanyUsers /></ProtectedRoute>} />
      <Route path="/company/contacts" element={<ProtectedRoute><CompanyContacts /></ProtectedRoute>} />
      <Route path="/company/courses" element={<ProtectedRoute><CompanyCourses /></ProtectedRoute>} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
