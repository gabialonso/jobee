import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/Jobee_Logo.png";
import Imagen from "../../assets/imagen-de-espera.jpg";
// Icons
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
// Components
import CourseCard from "../../components/courses/CourseCard.jsx";
import Header from "../../components/common/Header.jsx";

export default function HomePage() {
  return (
    <div className="w-full h-screen items-center flex flex-col p-0">
      <Header />
      {/*-----------------------------Presentation------------------------------ */}
      <div className="bg-yellow-200 rounded-2xl w-[95%] flex justify-center items-center">
        <div className="py-10 pl-4 text-start w-3/4 flex flex-col gap-6">
          <h1 className="text-2xl font-bold w-1/2">
            Conectando jóvenes a su primera experiencia laboral
          </h1>
          <p className="w-full pr-1">
            <b>¿Tenés entre 18 y 27 años y estás buscando tu primer empleo?</b>{" "}
            Sumate a Jobee y descubrí la infinidades de oportuidades que esperan
            por vos.
          </p>
        </div>
        <img
          src={Imagen}
          alt="Imagen de espera"
          className="w-1/4 rounded-tr-2xl rounded-br-2xl"
        />
      </div>
      {/*--------------------------------Courses--------------------------------- */}
      <div className="flex justify-around flex-col text-center w-full my-10">
        <h1 className="text-2xl">
          <b>Cursos Destacados</b>
        </h1>
        <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex mx-4 gap-4 p-4 w-max">
            <CourseCard
              plan="basico"
              title="Bases de la Programacion"
              description="Aprendé las bases de la programación y resolvé problemas con lógica simple, sin experiencia previa"
            />
            <CourseCard
              plan="medio"
              title="Bases de la Programacion"
              description="Aprendé las bases de la programación y resolvé problemas con lógica simple, sin experiencia previa"
            />
            <CourseCard
              plan="avanzado"
              title="React desde cero"
              description="Aprende los fundamentos de React paso a paso."
            />
            <CourseCard
              plan="basico"
              title="React desde cero"
              description="Aprende los fundamentos de React paso a paso."
            />
          </div>
        </div>
      </div>
      {/*---------------------------------Datas---------------------------------- */}
      <div className="bg-yellow-200 rounded-2xl w-[95%] flex justify-around items-center p-7 text-center">
        <p>
          <b>+12.000 jóvenes registrados</b>
        </p>
        <p>
          <b>+80 empresas aliadas</b>
        </p>
        <p>
          <b>+1.500 ofertas publicadas</b>
        </p>
        <p>
          <b>9/10 empresas recomiendan Jobee</b>
        </p>
      </div>
      {/*---------------------------Footer And Contacts-------------------------- */}
      <footer className="bg-[#111827] rounded-t-2xl w-full flex justify-between items-center mt-10 text-white p-5">
        <div className="w-full flex justify-around items-center gap-2">
          <div className="flex items-center">
            <MdPlace />
            <p className="px-3">
              <b>Canelones 1564</b>
            </p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p className="px-3">
              <b>+598 92 502 958</b>
            </p>
          </div>
          <div className="flex items-center">
            <GoMail />
            <p className="px-3">
              <b>animajobee@gmail.com</b>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
