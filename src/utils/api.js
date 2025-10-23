// base URL for backend APIE
const API_URL = 'http://api-jobee.anima.edu.uy/api';

/**
 * Fetch wrapper for backend requests
 * @param {string} endpoint - e.g. '/auth/login'
 * @param {object} options - e.g. { method: 'POST', body: { email, password } }
 */
export async function apiFetch(endpoint, options = {}) {
  // get token from localStorage if exists
  const token = localStorage.getItem('token');

  // setup headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // add token to header if exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // make the request
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  // throw error if response is not OK
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }

  // return data
  return response.json();
}
