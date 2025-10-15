/**
 * Save user session (token and user data)
 */
export function saveSession(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

/**
 * Get stored user data
 */
export function getUser() {
  const userString = localStorage.getItem('user');
  if (!userString) return null;
  return JSON.parse(userString);
}

/**
 * Get stored token
 */
export function getToken() {
  return localStorage.getItem('token');
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
  return !!getToken();
}

/**
 * Logout user (clear everything)
 */
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
