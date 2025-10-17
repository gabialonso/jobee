import { Link } from "react-router-dom";

export default function UserContacts() {
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
          <Link to="/user/courses" className="text-gray-600 hover:text-gray-900 transition">
            Courses
          </Link>
          <Link to="/user/contacts" className="text-gray-900 font-semibold border-b-2 border-gray-900">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages & Contacts</h1>

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
                The messaging system is currently under development.
                Soon you'll be able to communicate directly with companies and other users.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="mt-4 text-lg font-medium">No messages yet</p>
            <p className="mt-2 text-sm">Your conversations will appear here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
