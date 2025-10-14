import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserCompany() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem('token');
        // GET /api/company (lista todas las empresas)
        const response = await fetch('http://localhost:3000/api/company', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('failed to fetch companies');

        const data = await response.json();
        setCompanies(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/user/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/user/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/user/company" style={{ marginRight: '15px', fontWeight: 'bold' }}>companies</Link>
        <Link to="/user/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/user/contacts" style={{ marginRight: '15px' }}>contacts</Link>
      </nav>

      <h1>companies list</h1>

      {loading && <p>loading...</p>}

      {companies.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {companies.map((company) => (
            <li key={company.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
              <h3>{company.name}</h3>
              <p><strong>rut:</strong> {company.rut}</p>
              <p><strong>legal reason:</strong> {company.legalReason}</p>
              <p><strong>group:</strong> {company.groupName}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>no companies found</p>
      )}
    </div>
  );
}
