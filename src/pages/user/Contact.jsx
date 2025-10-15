import { Link } from "react-router-dom";

export default function UserContacts() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/user/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/user/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/user/company" style={{ marginRight: '15px' }}>companies</Link>
        <Link to="/user/courses" style={{ marginRight: '15px' }}>courses</Link>
        <Link to="/user/contacts" style={{ marginRight: '15px', fontWeight: 'bold' }}>contacts</Link>
      </nav>

      <h1>contacts / messages</h1>

      <p>messaging system placeholder - backend endpoint not implemented yet</p>
    </div>
  );
}
