import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import { getUser } from "../../utils/auth";

export default function CompanyProfile() {
  const [formData, setFormData] = useState({
    rut: '',
    name: '',
    legalReason: '',
    groupName: '',
    subGroupName: ''
  });
  const [companyId, setCompanyId] = useState(null);
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

        // Try to get existing company profile
        const data = await apiFetch(`/company/user/${user.id}`);

        if (data.data && data.data.length > 0) {
          // Profile exists, load it
          const company = data.data[0];
          setCompanyId(company.companyId);
          setFormData({
            rut: company.rut || '',
            name: company.name || '',
            legalReason: company.legalReason || '',
            groupName: company.groupName || '',
            subGroupName: company.subGroupName || ''
          });
          setIsEditing(true);
        }
      } catch (err) {
        console.error('Error loading company profile:', err);
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
      if (isEditing && companyId) {
        // Update existing profile
        await apiFetch(`/company/${companyId}`, {
          method: 'PUT',
          body: formData
        });
        setMessage('Company profile updated successfully');
      } else {
        // Create new profile
        const data = await apiFetch('/company/', {
          method: 'POST',
          body: formData
        });
        setCompanyId(data.data.companyId);
        setIsEditing(true);
        setMessage('Company profile created successfully');
      }
    } catch (err) {
      console.error('Error saving company profile:', err);
      setMessage(`Error: ${err.message || 'Failed to save company profile'}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading company profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex gap-6">
          <Link to="/company/dashboard" className="text-gray-600 hover:text-gray-900 transition">
            Dashboard
          </Link>
          <Link to="/company/profile" className="text-gray-900 font-semibold border-b-2 border-gray-900">
            Profile
          </Link>
          <Link to="/company/users" className="text-gray-600 hover:text-gray-900 transition">
            Candidates
          </Link>
          <Link to="/company/courses" className="text-gray-600 hover:text-gray-900 transition">
            Courses
          </Link>
          <Link to="/company/contacts" className="text-gray-600 hover:text-gray-900 transition">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {isEditing ? 'Edit Company Profile' : 'Create Company Profile'}
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              RUT (Tax ID)
            </label>
            <input
              type="text"
              value={formData.rut}
              onChange={(e) => setFormData({...formData, rut: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="12-34567890-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legal Reason (Razón Social)
            </label>
            <input
              type="text"
              value={formData.legalReason}
              onChange={(e) => setFormData({...formData, legalReason: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Name
              </label>
              <input
                type="text"
                value={formData.groupName}
                onChange={(e) => setFormData({...formData, groupName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subgroup Name
              </label>
              <input
                type="text"
                value={formData.subGroupName}
                onChange={(e) => setFormData({...formData, subGroupName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isEditing ? 'Update Company Profile' : 'Create Company Profile'}
          </button>
        </form>
      </main>
    </div>
  );
}
