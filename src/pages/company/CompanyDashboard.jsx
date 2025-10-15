import { Link } from "react-router-dom";

export default function CompanyDashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/company/dashboard" style={{ marginRight: '15px', fontWeight: 'bold' }}>dashboard</Link>
        <Link to="/company/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/company/users" style={{ marginRight: '15px' }}>candidates</Link>
        <Link to="/company/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/company/contacts" style={{ marginRight: '15px' }}>contacts</Link>
        <button onClick={() => { localStorage.clear(); window.location.href = '/'; }} style={{ marginLeft: '20px' }}>
          logout
        </button>
      </nav>

      <h1>company dashboard</h1>

      <div style={{ border: '1px solid #ddd', padding: '15px', marginTop: '20px', backgroundColor: '#f9f9f9' }}>
        <h2>quick stats</h2>
        <p>total candidates: -</p>
        <p>active job postings: -</p>
        <p>courses published: -</p>
      </div>
    </div>
  );
}
