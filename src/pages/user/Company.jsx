import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api";

export default function UserCompany() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // Fetch all companies from backend
        const data = await apiFetch('/company/');
        setCompanies(data.data || []);
      } catch (err) {
        console.error('Error fetching companies:', err);
        setError('Failed to load companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
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
          <Link to="/user/company" className="text-gray-900 font-semibold border-b-2 border-gray-900">
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Companies</h1>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading companies...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && companies.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.companyId}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {company.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-700">RUT:</span> {company.rut}
                  </p>
                  {company.legalReason && (
                    <p>
                      <span className="font-medium text-gray-700">Legal Reason:</span>{' '}
                      {company.legalReason}
                    </p>
                  )}
                  {company.groupName && (
                    <p>
                      <span className="font-medium text-gray-700">Group:</span>{' '}
                      {company.groupName}
                    </p>
                  )}
                  {company.subGroupName && (
                    <p>
                      <span className="font-medium text-gray-700">Subgroup:</span>{' '}
                      {company.subGroupName}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && companies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No companies found</p>
          </div>
        )}
      </main>
    </div>
  );
}
