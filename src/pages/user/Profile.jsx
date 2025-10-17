import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import { getUser } from "../../utils/auth";

export default function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    Ci: '',
    highSchool: '',
    description: '',
    cv: '',
    linkedin: ''
  });
  const [personId, setPersonId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const user = getUser();
        if (!user?.id) {
          setMessage('User not found');
          setLoading(false);
          return;
        }

        // Try to get existing profile
        const data = await apiFetch(`/person/user/${user.id}`);

        if (data.data && data.data.length > 0) {
          // Profile exists, load it
          const person = data.data[0];
          setPersonId(person.personId);
          setFormData({
            firstName: person.firstName || '',
            lastName: person.lastName || '',
            birthday: person.birthday || '',
            Ci: person.Ci || '',
            highSchool: person.highSchool || '',
            description: person.description || '',
            cv: person.cv || '',
            linkedin: person.linkedin || ''
          });
          setIsEditing(true);
        }
      } catch (err) {
        console.error('Error loading profile:', err);
        // Profile doesn't exist yet, that's ok
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const payload = {
        ...formData,
        birthday: formData.birthday ? parseInt(formData.birthday) : null,
        Ci: formData.Ci ? parseInt(formData.Ci) : null,
      };

      if (isEditing && personId) {
        // Update existing profile
        await apiFetch(`/person/${personId}`, {
          method: 'PUT',
          body: payload
        });
        setMessage('Profile updated successfully');
      } else {
        // Create new profile
        const data = await apiFetch('/person/', {
          method: 'POST',
          body: payload
        });
        setPersonId(data.data.personId);
        setIsEditing(true);
        setMessage('Profile created successfully');
      }
    } catch (err) {
      console.error('Error saving profile:', err);
      setMessage(`Error: ${err.message || 'Failed to save profile'}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex gap-6">
          <Link to="/user/dashboard" className="text-gray-600 hover:text-gray-900 transition">
            Dashboard
          </Link>
          <Link to="/user/profile" className="text-gray-900 font-semibold border-b-2 border-gray-900">
            Profile
          </Link>
          <Link to="/user/company" className="text-gray-600 hover:text-gray-900 transition">
            Companies
          </Link>
          <Link to="/user/courses" className="text-gray-600 hover:text-gray-900 transition">
            Courses
          </Link>
          <Link to="/user/contacts" className="text-gray-600 hover:text-gray-900 transition">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {isEditing ? 'Edit Your Profile' : 'Create Your Profile'}
        </h1>

        {message && (
          <div className={`mb-6 px-4 py-3 rounded-lg ${
            message.includes('Error') || message.includes('error')
              ? 'bg-red-50 border border-red-200 text-red-700'
              : 'bg-green-50 border border-green-200 text-green-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Year
              </label>
              <input
                type="number"
                value={formData.birthday}
                onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1990"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CI (ID Number)
              </label>
              <input
                type="number"
                value={formData.Ci}
                onChange={(e) => setFormData({...formData, Ci: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              High School
            </label>
            <input
              type="text"
              value={formData.highSchool}
              onChange={(e) => setFormData({...formData, highSchool: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CV URL
            </label>
            <input
              type="url"
              value={formData.cv}
              onChange={(e) => setFormData({...formData, cv: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://linkedin.com/in/..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isEditing ? 'Update Profile' : 'Create Profile'}
          </button>
        </form>
      </main>
    </div>
  );
}
