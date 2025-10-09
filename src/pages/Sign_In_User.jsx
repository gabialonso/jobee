import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

export default function Sign_In_User() {
  const [person, setPerson] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    ci: "",
    birthDate: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
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

    navigate("/user/home");

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
    <div className="w-full items-center flex flex-col p-3 ">
      <div className="bg-yellow-300/50 rounded-xl w-2/5 h-4/5 pb-5">
        <h1 className="text-4xl font-bold m-10 text-black">
          Registro de Usuario
        </h1>

        <form onSubmit={handleSubmit} className="text-start flex flex-col gap-3 items-center text-black " >

          <div className="w-4/6">
            <input
              className="border-1 flex rounded-lg pl-1 w-full py-0 bg-white placeholder-black/50 "
              type="email"
              id="email"
              value={person.email}
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
              value={person.password}
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
              value={person.confirmPassword}
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
              value={person.name}
              onChange={handleChange}
              placeholder="¿Cuál es su nombre?"
              required
            />
          </div>
          
          <div className="w-4/6"> 
            <input
              className="border-1 rounded-lg pl-1 w-full pl-1 py-0 bg-white placeholder-black/50"
              type="number"
              id="ci"
              value={person.ci}
              onChange={handleChange}
              placeholder="¿Cuál es su C.I?"
              required
            />
          </div>
            
          <div className="w-4/6">
            <input
              className="border-1 rounded-lg pl-1 w-full py-0 bg-white placeholder-black/50"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              placeholder="¿Cual es su fecha de nacimiento?"
              id="birthDate"
              value={person.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className="flex flex-col items-center gap-2 mt-4">
            <button className="buttons_forms" type="submit">Registrar usuario</button>
            <p>¿Quieres ser empresa? <Link className="underline text-[#1769E0]" to="/sign_in_company">Registrarce como Empresa</Link></p>
            <p>¿Ya tienes una cuenta? <Link className="underline text-[#1769E0]" to="/log_in">Iniciar sesión</Link></p>

          </div>
        </form>
      </div>
    </div>
  );
}
