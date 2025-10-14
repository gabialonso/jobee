import { useState } from "react";
import { Link } from "react-router-dom";

export default function CompanyProfile() {
  const [formData, setFormData] = useState({
    rut: '',
    name: '',
    legalReason: '',
    groupName: '',
    subGroupName: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      // POST /api/company
      const response = await fetch('http://localhost:3000/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          userId: 1 // placeholder
        })
      });

      if (!response.ok) throw new Error('failed to create company profile');

      setMessage('company profile created successfully');
    } catch (err) {
      setMessage('error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/company/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/company/profile" style={{ marginRight: '15px', fontWeight: 'bold' }}>profile</Link>
        <Link to="/company/users" style={{ marginRight: '15px' }}>candidates</Link>
        <Link to="/company/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/company/contacts" style={{ marginRight: '15px' }}>contacts</Link>
      </nav>

      <h1>company profile</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>rut:</label><br />
          <input type="text" value={formData.rut} onChange={(e) => setFormData({...formData, rut: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>company name:</label><br />
          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>legal reason:</label><br />
          <input type="text" value={formData.legalReason} onChange={(e) => setFormData({...formData, legalReason: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>group name:</label><br />
          <input type="text" value={formData.groupName} onChange={(e) => setFormData({...formData, groupName: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>subgroup name:</label><br />
          <input type="text" value={formData.subGroupName} onChange={(e) => setFormData({...formData, subGroupName: e.target.value})} style={{ width: '100%', padding: '5px' }} />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>save profile</button>
      </form>

      {message && <p style={{ marginTop: '20px', color: message.includes('error') ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
}
