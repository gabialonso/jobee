import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUser, resolveRole } from '../../utils/auth.js';

/**
 * Routing wrapper for public pages.
 * If there is an authenticated session, redirect to the corresponding dashboard.
 */
export default function PublicRoute({ children }) {
  if (!isAuthenticated()) {
    return children;
  }

  const user = getUser();
  const role = resolveRole(user);

  if (role === 'company') {
    return <Navigate to="/company/dashboard" replace />;
  }

  if (role === 'Admin') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (role === 'user') {
    return <Navigate to="/user/dashboard" replace />;
  }

  return children;
}
