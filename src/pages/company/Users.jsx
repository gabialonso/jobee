import { Link } from "react-router-dom";

export default function CompanyUsers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex gap-6">
          <Link to="/company/dashboard" className="text-gray-600 hover:text-gray-900 transition">
            Dashboard
          </Link>
          <Link to="/company/profile" className="text-gray-600 hover:text-gray-900 transition">
            Profile
          </Link>
          <Link to="/company/users" className="text-gray-900 font-semibold border-b-2 border-gray-900">
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Candidate Management</h1>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Feature Coming Soon
              </h3>
              <p className="text-blue-800">
                The candidate management feature is currently under development.
                This section will allow you to view, search, and manage potential candidates for your company.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for future candidate list */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="mt-4 text-lg font-medium">No candidates available yet</p>
            <p className="mt-2 text-sm">Check back later for candidate listings</p>
          </div>
        </div>
      </main>
    </div>
  );
}
