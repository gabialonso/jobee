import { Link } from "react-router-dom";

export default function CompanyContacts() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/company/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/company/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/company/users" style={{ marginRight: '15px' }}>candidates</Link>
        <Link to="/company/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/company/contacts" style={{ marginRight: '15px', fontWeight: 'bold' }}>contacts</Link>
      </nav>

      <h1>contacts / messages</h1>

      <p>messaging system placeholder - backend endpoint not implemented yet</p>
    </div>
  );
}
