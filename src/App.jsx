import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute.jsx";

import UserDashboard from "./pages/user/DashboardPage.jsx";
import UserProfile from "./pages/user/profile/ProfilePage.jsx";
import UserCompany from "./pages/user/CompanyPage.jsx";
import UserCourses from "./pages/user/courses/CoursesPage.jsx";
import UserContacts from "./pages/user/contact/ContactPage.jsx";
import UserPostulationsPage from "./pages/user/postulations/UserPostulationsPage.jsx";

import CompanyDashboard from "./pages/company/DashboardPage.jsx";
import CompanyProfile from "./pages/company/profile/CompanyProfilePage.jsx";
import CompanyUsers from "./pages/company/users/UsersPage.jsx";
import CompanyCourses from "./pages/company/courses/CompanyCoursesPage.jsx";
import CompanyContacts from "./pages/company/contact/ContactPage.jsx";
import CompanyPostulationsPage from "./pages/company/postulations/CompanyPostulationsPage.jsx";

import HomePage from "./pages/public/HomePage.jsx";
import SplashPage from "./pages/public/SplashPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpUserPage from "./pages/auth/SignUpUserPage.jsx";
import SignUpCompanyPage from "./pages/auth/SignUpCompanyPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/splash" element={<SplashPage />} />

      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup/user" element={<SignUpUserPage />} />
      <Route path="/auth/signup/company" element={<SignUpCompanyPage />} />
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
        path="/user/courses"
        element={
          <ProtectedRoute>
            <UserCourses />
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
        path="/company/courses"
        element={
          <ProtectedRoute>
            <CompanyCourses />
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
