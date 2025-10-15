// Base URL for backend API
const API_URL = 'http://localhost:3000/api';

/**
 * Fetch wrapper for backend requests
 * @param {string} endpoint - e.g. '/auth/login'
 * @param {object} options - e.g. { method: 'POST', body: { email, password } }
 */
export async function apiFetch(endpoint, options = {}) {
  // Get token from localStorage if exists
  const token = localStorage.getItem('token');

  // Setup headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add token to header if exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Make the request
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  // Throw error if response is not OK
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }

  // Return data
  return response.json();
}
