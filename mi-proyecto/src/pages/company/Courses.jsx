import { Link } from "react-router-dom";
export default function Company_company() {
  return (
    <div className="p-10">
      <nav>
        <Link to={"/company/home"}>Inicio</Link>
        <Link to={"/company/profile"}>Perfil</Link>
        <Link to={"/company/users"}>Jovenes</Link>
        <Link to={"/company/contacts"}>Contactos</Link>
        <Link to={"/company/courses"}>Cursos</Link>
      </nav>
      <h1 className="text-4xl font-bold text-yellow-600">Cursos de company cargó 👌</h1>
      <p className="mt-3 text-gray-700">Router + Tailwind OK.</p>
    </div>
  );
}