import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import CourseCard from "../../components/courses/CourseCard";

export default function UserCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch courses from backend
        const data = await apiFetch('/course/');

        // Map backend data to CourseCard format
        const mappedCourses = (data.data || []).map(course => ({
          // Map backend fields
          title: course.title,
          description: course.description,
          duration: course.duration ? `${course.duration}h` : null,

          // Add default values for missing fields
          plan: 'basico',
          planLabel: 'Curso',
          modality: 'Online',

          // Keep original ID for key prop
          courseId: course.courseId
        }));

        setCourses(mappedCourses);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex gap-6">
          <Link to="/user/dashboard" className="text-gray-600 hover:text-gray-900 transition">
            Dashboard
          </Link>
          <Link to="/user/profile" className="text-gray-600 hover:text-gray-900 transition">
            Profile
          </Link>
          <Link to="/user/company" className="text-gray-600 hover:text-gray-900 transition">
            Companies
          </Link>
          <Link to="/user/courses" className="text-gray-900 font-semibold border-b-2 border-gray-900">
            Courses
          </Link>
          <Link to="/user/contacts" className="text-gray-600 hover:text-gray-900 transition">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading courses...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && courses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.courseId} course={course} />
            ))}
          </div>
        )}

        {!loading && !error && courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No courses available at the moment</p>
          </div>
        )}
      </main>
    </div>
  );
}
