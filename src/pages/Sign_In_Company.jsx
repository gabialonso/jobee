import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

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

  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCompany((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

  

    try {
      const { email, password, name, rut, legalReason, socialGroup, subGroup } = company;
      if (
        email === "" ||
        password === "" ||
        name === "" ||
        rut === "" ||
        legalReason === "" ||
        socialGroup === "" ||
        subGroup === ""
      ) {
        setError("Por favor, complete todos los campos.");
        return;
      }

      const res = await fetch("http://localhost:3000/api/companyService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(company),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Error en el registro");
        return;
      }

      setSuccess("Registro exitoso ✅");
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
      navigate("/company/home");
    } catch {
      setError("Error de red o del servidor");
    }
  };

  return (
    <div className="w-full items-center flex flex-col p-3 ">
      <div className="bg-yellow-300/50 rounded-xl w-2/5 h-4/5 pb-5">
        <h1 className="text-4xl font-bold m-2 my-5 text-black">
          Registro de Empresa
        </h1>

        <form onSubmit={handleSubmit} className="text-start flex flex-col gap-3 items-center text-black " >

          <div className="w-4/6">
            <input
              className="border-1 flex rounded-lg pl-1 w-full py-0 bg-white placeholder-black/50 "
              type="email"
              id="email"
              value={company.email}
              onChange={handleChange}
              placeholder="¿Cuál es su email?"
              required
            />
          </div>

          <div className="flex border-1 rounded-lg mx-2 w-4/6 flex justify-around bg-white">
            <input
              className="pl-1 py-0 w-full rounded-l-lg placeholder-black/50"
              type={mostrar ? "text" : "password"}
              id="password"
              value={company.password}
              onChange={handleChange}
              placeholder="Escriba su contraseña"
              required
            />
            <button
              type="button"
              onClick={() => setMostrar(!mostrar)}
            >
            {mostrar ? <IoEyeOffOutline/> : <IoEyeOutline/>}
            </button> 
          </div>
          
          <div className="flex border-1 rounded-lg mx-2 w-4/6 flex justify-around bg-white">
            <input
              className=" pl-1 py-0 w-full rounded-l-lg  placeholder-black/50" 
              type={mostrar2 ? "text" : "password"}
              id="confirmPassword"
              value={company.confirmPassword}
              onChange={handleChange}
              placeholder="Confirme su contraseña"
              required
            />
            <button
            type="button"
            onClick={() => setMostrar2(!mostrar2)}
            >
              {mostrar2 ? <IoEyeOffOutline/> : <IoEyeOutline/>}
            </button>
          </div>
          <div className="w-4/6">
           
            <input
              className="border-1 rounded-lg pl-1 w-full py-0 bg-white placeholder-black/50" 
              type="text"
              id="name"
              value={company.name}
              onChange={handleChange}
              placeholder="¿Como se llama su empresa?"
              required
            />
          </div>
          
          <div className="w-4/6"> 
            <input
              className="border-1 rounded-lg pl-1 w-full pl-1 py-0 bg-white placeholder-black/50"
              type="number"
              id="rut"
              value={company.rut}
              onChange={handleChange}
              placeholder="¿Cuál es su RUT?"
              required
            />
          </div>

          <div className="w-4/6"> 
            <input
              className="border-1 rounded-lg pl-1 w-full pl-1 py-0 bg-white placeholder-black/50"
              type="text"
              id="legalreason"
              value={company.legalReason}
              onChange={handleChange}
              placeholder="¿Cuál es su razon social?"
              required
            />
          </div>

          <div className="w-4/6"> 
            <input
              className="border-1 rounded-lg pl-1 w-full pl-1 py-0 bg-white placeholder-black/50"
              type="text"
              id="socialgroup"
              value={company.socialGroup}
              onChange={handleChange}
              placeholder="¿Cuál es su grupo social?"
              required
            />
          </div>

          <div className="w-4/6"> 
            <input
              className="border-1 rounded-lg pl-1 w-full pl-1 py-0 bg-white placeholder-black/50"
              type="text"
              id="subgroup"
              value={company.subGroup}
              onChange={handleChange}
              placeholder="¿Cuál es su sub-grupo?"
              required
            />
          </div>

          

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className="flex flex-col items-center gap-2 mt-4">
            <button className="buttons_forms" type="submit">Registrar empresa </button>
            <p>¿Quieres ser empresa? <Link className="underline text-[#1769E0]" to="/sign_in_user">Registrarce como Usuario</Link></p>
            <p>¿Ya tienes una cuenta? <Link className="underline text-[#1769E0]" to="/log_in">Iniciar sesión</Link></p>

          </div>
        </form>
      </div>
    </div>
  );
}
{/*<div>
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
    </div>*/}