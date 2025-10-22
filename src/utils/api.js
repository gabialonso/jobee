const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(!isFormData ? { 'Content-Type': 'application/json' } : {}),
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      body: options.body && !isFormData ? JSON.stringify(options.body) : options.body,
    });

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('El servidor no está disponible o devolvió una respuesta inválida');
    }

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.message || payload.error || 'Error en la petición');
    }

    return payload?.data ?? payload;
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor. Asegurate de que el backend esté corriendo.');
    }
    throw error;
  }
}
