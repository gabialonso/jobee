import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CompanyCourses() {
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
        <Link to="/company/dashboard" style={{ marginRight: '15px' }}>dashboard</Link>
        <Link to="/company/profile" style={{ marginRight: '15px' }}>profile</Link>
        <Link to="/company/users" style={{ marginRight: '15px' }}>candidates</Link>
        <Link to="/company/courses" style={{ marginRight: '15px', fontWeight: 'bold' }}>courses</Link>
        <Link to="/company/contacts" style={{ marginRight: '15px' }}>contacts</Link>
      </nav>

      <h1>manage courses</h1>

      <button style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>+ create new course</button>

      {loading && <p>loading...</p>}

      {courses.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {courses.map((course) => (
            <li key={course.courseId} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><strong>duration:</strong> {course.duration}h | <strong>price:</strong> ${course.price}</p>
              <button style={{ padding: '5px 15px', marginRight: '10px', cursor: 'pointer' }}>edit</button>
              <button style={{ padding: '5px 15px', cursor: 'pointer' }}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>no courses created yet</p>
      )}
    </div>
  );
}
