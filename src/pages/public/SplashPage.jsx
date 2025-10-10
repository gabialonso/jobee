import { Link } from "react-router-dom";
import Logo from "../../assets/Jobee_Logo.png";
import "../../App.css";

export default function SplashPage() {
  return (
    <div className="w-full h-screen">
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <Link
            to="/"
            className="inline-block mt-6 rounded-xl px-5 py-2.5text-white font-semibold hover:transition"
          >
            <div className="flex justify-center p-0">
              <img
                src={Logo}
                alt="Logo De Jobee"
                className="interactive-logo"
              />
            </div>
          </Link>
          <h1 className="m-0 text-4xl font-bold">Jobee</h1>
          <h2 className="text-lg mt-0 font-bold">Conectá, Crecé, Volá</h2>
        </div>
      </div>
    </div>
  );
}
