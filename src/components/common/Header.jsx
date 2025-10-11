import { Link } from "react-router-dom";
import Logo from "../../assets/Jobee_Logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-golden w-[95%] my-4 rounded-[20px]">
      <nav className="w-full flex items-center justify-around">
        <div className="flex basis-1/8 items-center">
          <img src={Logo} alt="Logo De Jobee" className="h-23" />
          <p className="text-xl font-bold">Jobee</p>
        </div>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/auth/signup/user">
              <button className="buttons_interactive">
                Registrarse como persona
              </button>
            </Link>
          </li>
          <li>
            <Link to="/auth/signup/company">
              <button className="buttons_interactive">
                Registrarse como empresa
              </button>
            </Link>
          </li>
          <li>
            <Link to="/auth/login">
              <button className="buttons_interactive">Iniciar Sesión</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
