import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    ci: '',
    highSchool: '',
    description: '',
    cv: '',
    linkedin: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      // POST /api/person
      const response = await fetch('http://localhost:3000/api/person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          birthday: parseInt(formData.birthday),
          Ci: parseInt(formData.ci),
          userId: 1 // placeholder, deberia venir del token
        })
      });

      if (!response.ok) throw new Error('failed to create profile');

      setMessage('profile created successfully');
    } catch (err) {
      setMessage('error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/user/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/user/profile" style={{ marginRight: '15px', fontWeight: 'bold' }}>profile</Link>
        <Link to="/user/company" style={{ marginRight: '15px' }}>companies</Link>
        <Link to="/user/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/user/contacts" style={{ marginRight: '15px' }}>contacts</Link>
      </nav>

      <h1>user profile</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>first name:</label><br />
          <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>last name:</label><br />
          <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>birthday (year):</label><br />
          <input type="number" value={formData.birthday} onChange={(e) => setFormData({...formData, birthday: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>ci:</label><br />
          <input type="number" value={formData.ci} onChange={(e) => setFormData({...formData, ci: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>high school:</label><br />
          <input type="text" value={formData.highSchool} onChange={(e) => setFormData({...formData, highSchool: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>description:</label><br />
          <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ width: '100%', padding: '5px' }} rows="4"></textarea>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>cv url:</label><br />
          <input type="text" value={formData.cv} onChange={(e) => setFormData({...formData, cv: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>linkedin:</label><br />
          <input type="text" value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>save profile</button>
      </form>

      {message && <p style={{ marginTop: '20px', color: message.includes('error') ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
}
