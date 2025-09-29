import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sign_In_User() {
  const [person, setPerson] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    ci: "",
    birthDate: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // 👈 inicializar navigate
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPerson((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (person.password !== person.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (person.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    console.log("Datos de la persona:", person);

    // ✅ redirigir cuando todo está OK
    navigate("/user/home");

    // ✅ resetear formulario
    setPerson({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      ci: "",
      birthDate: "",
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-yellow-600">
        Sign In User se cargó 👌
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={person.email}
          onChange={handleChange}
          placeholder="¿Cuál es su email?"
          required
        />
        <br />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={person.password}
          onChange={handleChange}
          placeholder="Escriba su contraseña"
          required
        />
        <br />

        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          value={person.confirmPassword}
          onChange={handleChange}
          placeholder="Confirme su contraseña"
          required
        />
        <br />

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={person.name}
          onChange={handleChange}
          placeholder="¿Cuál es su nombre?"
          required
        />
        <br />

        <label htmlFor="ci">C.I:</label>
        <input
          type="number"
          id="ci"
          value={person.ci}
          onChange={handleChange}
          placeholder="¿Cuál es su C.I?"
          required
        />
        <br />

        <label htmlFor="birthDate">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthDate"
          value={person.birthDate}
          onChange={handleChange}
          required
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit">Registrar usuario</button>
      </form>
    </div>
  );
}
