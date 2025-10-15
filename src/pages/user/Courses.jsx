import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // GET /api/course
        const response = await fetch('http://localhost:3000/api/course');

        if (!response.ok) throw new Error('failed to fetch courses');

        const data = await response.json();
        setCourses(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <Link to="/user/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/user/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/user/company" style={{ marginRight: '15px' }}>companies</Link>
        <Link to="/user/courses" style={{ marginRight: '15px', fontWeight: 'bold' }}>courses</Link>
        <Link to="/user/contacts" style={{ marginRight: '15px' }}>contacts</Link>
      </nav>

      <h1>available courses</h1>

      {loading && <p>loading...</p>}

      {courses.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {courses.map((course) => (
            <li key={course.courseId} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><strong>duration:</strong> {course.duration}h</p>
              <p><strong>theme:</strong> {course.theme}</p>
              <p><strong>price:</strong> ${course.price}</p>
              <button style={{ padding: '5px 15px', cursor: 'pointer' }}>enroll</button>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>no courses available</p>
      )}
    </div>
  );
}
