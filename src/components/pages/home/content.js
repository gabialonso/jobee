import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export const featureItems = [
  {
    title: "Acceso directo a talento joven",
    description:
      "Encontrá candidatos entre 18–27 años listos para aprender. Sin filtros de años de experiencia.",
  },
  {
    title: "Impacto social positivo",
    description:
      "Apostá al futuro dando oportunidades a quienes recién comienzan su camino laboral.",
  },
  {
    title: "Cursos de diferentes niveles",
    description:
      "Encontrá en la sección de cursos distintos niveles, áreas específicas y formatos a tu medida.",
  },
  {
    title: "Gestión simple de ofertas",
    description:
      "Publicá, editá y gestioná postulaciones en minutos desde una plataforma intuitiva.",
  },
];

export const metricItems = [
  { label: "+12.000", detail: "jóvenes registrados" },
  { label: "+80", detail: "empresas aliadas" },
  { label: "+1.500", detail: "ofertas publicadas" },
  { label: "9/10", detail: "empresas recomiendan Jobee" },
];

export const heroContent = {
  eyebrow: "Primera experiencia laboral",
  title: "Conectamos talento joven con empresas reales",
  emphasis: "¿Tenés entre 18 y 27 años?",
  description:
    "Sumate a Jobee, aprendé nuevas habilidades y llegá a tu primera entrevista con respaldo y oportunidades reales.",
  bannerAlt: "Ilustración de jóvenes conectando oportunidades laborales",
  highlight: {
    title: "¡Animáte a dar el paso!",
    description: "Seguro tenemos un plan que se ajusta a vos.",
  },
  ctas: [
    { href: "/auth/signup/user", label: "Registrate como usuario" },
    { href: "/auth/signup/company", label: "Soy empresa aliada" },
  ],
};

export const callToActionContent = {
  title: "¿Listo para dar tu primer paso profesional?",
  description:
    "Creamos un espacio sencillo para aprender, practicar y conectar. Elegí tu plan y empecemos hoy.",
  ctas: [
    { href: "/auth/signup/user", label: "Crear cuenta joven" },
    { href: "/auth/signup/company", label: "Sumarse como empresa" },
  ],
};

export const contactItems = [
  { icon: MdPlace, label: "Canelones 1564" },
  { icon: FaPhoneAlt, label: "+598 92 502 958" },
  { icon: GoMail, label: "animajobee@gmail.com" },
];

export const courseSectionContent = {
  eyebrow: "Cursos destacados",
  title: "Diseñados para impulsar tu próximo paso",
  description:
    "Cada plan incluye proyectos reales, acompañamiento personalizado y acceso a oportunidades laborales de nuestra red. Elegí por dónde empezar y avanzá a tu ritmo.",
};
