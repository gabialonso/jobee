import { Routes, Route, Navigate, Link } from "react-router-dom";
import Constructor from "./pages/Constructor.jsx";
import Home from "./pages/Home.jsx";
//-------------------------------Sign in/Log in pages-------------------------------
import Log_In from "./pages/Log_In.jsx";
import Sign_in_Company from "./pages/Sign_In_Company.jsx";
import Sign_in_User from "./pages/Sign_In_User.jsx";
//------------------------------------User pages------------------------------------
import Home_User from "./pages/user/Home.jsx"
import Profile_User from "./pages/user/Profile.jsx"
import Company_User from "./pages/user/Company.jsx"
import Contacts_User from "./pages/user/Contact.jsx"
import Courses_User from "./pages/user/Courses.jsx"
//-----------------------------------Company pages----------------------------------
import Home_Company from "./pages/company/Home.jsx"
import Profile_Company from "./pages/company/Profile.jsx"
import Users_Company from "./pages/company/Users.jsx"
import Contact_Company from "./pages/company/Contact.jsx"
import Courses_Company from "./pages/company/Courses.jsx"
//----------------------------------Catch all page----------------------------------

function NotFound() {
  return (
    <div className="p-10">
      <p>404</p>
      <Link to="/constructor" className="text-blue-600 underline">Ir a la landing</Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/constructor" replace />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/home" element={<Home />} />
//-------------------------------Sign in/Log in routes-------------------------------
        <Route path="/log_in" element={<Log_In />} /> 
        <Route path="/sign_in_company" element={<Sign_in_Company />} />
        <Route path="/sign_in_user" element={<Sign_in_User />} />
//------------------------------------User routes------------------------------------
        <Route path="/user/home" element={<Home_User />} />
        <Route path="/user/profile" element={<Profile_User />} />
        <Route path="/user/company" element={<Company_User />} />
        <Route path="/user/contacts" element={<Contacts_User />} />
        <Route path="/user/courses" element={<Courses_User />} />
//-----------------------------------Company routes----------------------------------
        <Route path="/company/home" element={<Home_Company />} />
        <Route path="/company/profile" element={<Profile_Company />} />
        <Route path="/company/users" element={<Users_Company />} />
        <Route path="/company/contacts" element={<Contact_Company />} />
        <Route path="/company/courses" element={<Courses_Company />} />
//----------------------------------Catch all route----------------------------------
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}





