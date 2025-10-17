import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

// ============================= User Pages =============================
import UserDashboard from "./pages/user/DashboardPage.jsx";
import UserProfile from "./pages/user/profile/ProfilePage.jsx";
import UserCompany from "./pages/user/CompanyPage.jsx";
import UserContacts from "./pages/user/contact/ContactPage.jsx";
import UserPostulationsPage from "./pages/user/postulations/UserPostulationsPage.jsx";

// ============================= Company Pages =============================
import CompanyDashboard from "./pages/company/DashboardPage.jsx";
import CompanyProfile from "./pages/company/profile/CompanyProfilePage.jsx";
import CompanyUsers from "./pages/company/users/UsersPage.jsx";
import CompanyContacts from "./pages/company/contact/ContactPage.jsx";
import CompanyPostulationsPage from "./pages/company/postulations/CompanyPostulationsPage.jsx";

// ============================= Public & Auth =============================
import HomePage from "./pages/public/HomePage.jsx";
import SplashPage from "./pages/public/SplashPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpUserPage from "./pages/auth/SignUpUserPage.jsx";
import SignUpCompanyPage from "./pages/auth/SignUpCompanyPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* ========================== PUBLIC ROUTES ========================== */}
      <Route path="/" element={<HomePage />} />
      <Route path="/splash" element={<SplashPage />} />

      {/* ========================== AUTH ROUTES ========================== */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup/user" element={<SignUpUserPage />} />
      <Route path="/auth/signup/company" element={<SignUpCompanyPage />} />

      {/* ========================== USER ROUTES ========================== */}
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/company"
        element={
          <ProtectedRoute>
            <UserCompany />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/contacts"
        element={
          <ProtectedRoute>
            <UserContacts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/postulations"
        element={
          <ProtectedRoute>
            <UserPostulationsPage />
          </ProtectedRoute>
        }
      />

      {/* ========================== COMPANY ROUTES ========================== */}
      <Route
        path="/company/dashboard"
        element={
          <ProtectedRoute>
            <CompanyDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company/profile"
        element={
          <ProtectedRoute>
            <CompanyProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company/users"
        element={
          <ProtectedRoute>
            <CompanyUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company/contacts"
        element={
          <ProtectedRoute>
            <CompanyContacts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company/postulations"
        element={
          <ProtectedRoute>
            <CompanyPostulationsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
