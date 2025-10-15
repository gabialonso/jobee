import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api.js";
import { logout } from "../../utils/auth.js";

export default function UserDashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile from backend
        const data = await apiFetch('/users/profile');
        setProfile(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/user/dashboard" style={{ marginRight: '15px', fontWeight: 'bold' }}>dashboard</Link>
        <Link to="/user/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/user/company" style={{ marginRight: '15px' }}>companies</Link>
        <Link to="/user/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/user/contacts" style={{ marginRight: '15px' }}>contacts</Link>
        <button onClick={() => { logout(); window.location.href = '/'; }} style={{ marginLeft: '20px' }}>
          logout
        </button>
      </nav>

      <h1>user dashboard</h1>

      {loading && <p>loading...</p>}
      {error && <p style={{ color: 'red' }}>error: {error}</p>}

      {profile && (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginTop: '20px', backgroundColor: '#f9f9f9' }}>
          <h2>profile info</h2>
          <p><strong>id:</strong> {profile.id}</p>
          <p><strong>email:</strong> {profile.email}</p>
          <p><strong>name:</strong> {profile.name}</p>
        </div>
      )}

      {!loading && !error && !profile && (
        <p>please login first</p>
      )}
    </div>
  );
}
