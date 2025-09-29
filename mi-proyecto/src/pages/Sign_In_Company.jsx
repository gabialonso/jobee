import { useState } from "react";

export default function Sign_In_Company() {
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCompany((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (company.password !== company.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);
      setTimeout(() => {
        console.log("Empresa registrada:", company);

        setSuccess("Empresa registrada correctamente ✅");
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
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Error inesperado");
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-1xl font-bold text-black-600">
        Sign In Company se cargó 👌
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={company.email}
          onChange={handleChange}
          placeholder="Cual es su email?"
          required
        />
        <br />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={company.password}
          onChange={handleChange}
          placeholder="Cree una contraseña"
          required
        />
        <br />

        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          value={company.confirmPassword}
          onChange={handleChange}
          placeholder="Confirme su contraseña"
          required
        />
        <br />

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={company.name}
          onChange={handleChange}
          placeholder="Como se llama su empresa?"
          required
        />
        <br />

        <label htmlFor="rut">RUT:</label>
        <input
          type="number"
          id="rut"
          value={company.rut}
          onChange={handleChange}
          placeholder="Cual es su RUT?"
          required
        />
        <br />

        <label htmlFor="legalReason">Razon Social:</label>
        <input
          type="text"
          id="legalReason"
          value={company.legalReason}
          onChange={handleChange}
          placeholder="Cual es su razon social?"
          required
        />
        <br />

        <label htmlFor="socialGroup">Grupo Social:</label>
        <input
          type="text"
          id="socialGroup"
          value={company.socialGroup}
          onChange={handleChange}
          placeholder="Cual es su grupo social?"
          required
        />
        <br />

        <label htmlFor="subGroup">Sub Grupo:</label>
        <input
          type="text"
          id="subGroup"
          value={company.subGroup}
          onChange={handleChange}
          placeholder="Cual es su sub grupo ?"
          required
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrar empresa"}
        </button>
      </form>
    </div>
  );
}
