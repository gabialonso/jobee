import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyForm() {
  const [company, setCompany] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    rut: "",
    legalReason: "",
    socialGroup: "",
    subGroup: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCompany((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (company.password !== company.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (company.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    console.log("Datos de la empresa:", company);


    setSuccess("Registro exitoso ✅");
    navigate("/company/home");

    setCompany({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      rut: "",
      legalReason: "",
      socialGroup: "",
      subGroup: "",
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-yellow-600">
        Sign In User se cargó 👌
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Cual es su email?"
          value={company.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          placeholder="Cual es su contraseña?"
          value={company.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="confirmPassword">Confirme su contraseña:</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme su Contraseña"
          value={company.confirmPassword}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="name">Nombre de la empresa:</label>
        <input
          id="name"
          type="text"
          placeholder="Como se llama su empresa?"
          value={company.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="rut">RUT:</label>
        <input
          id="rut"
          type="number"
          placeholder="Cual es su RUT?"
          value={company.rut}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="legalReason">Razón social:</label>
        <input
          id="legalReason"
          type="text"
          placeholder="Cual es su razón social?"
          value={company.legalReason}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="socialGroup">Grupo social:</label>
        <input
          id="socialGroup"
          type="text"
          placeholder="Cual es su grupo social?"
          value={company.socialGroup}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />
        <label htmlFor="subGroup">Subgrupo:</label>
        <input
          id="subGroup"
          type="text"
          placeholder="Cual es su subgrupo?"
          value={company.subGroup}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <br />


        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Registrar empresa
        </button>
      </form>
    </div>
  );
}
