import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="p-10">
     <Link to={"/sign_in_user"}><button>Registrarce como persona</button></Link>
     <Link to={"/sign_in_company"}><button>Registrarce como empresa</button></Link>
     <Link to={"/log_in"}><button>Iniciar sesion</button></Link>
      <h1 className="text-4xl font-bold text-yellow-600">Home cargó 👌</h1>
      <p className="mt-3 text-gray-700">Router + Tailwind OK.</p>
    </div>
  );
}

