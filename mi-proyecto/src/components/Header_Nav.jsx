import Logo from "../assets/Jobee_Logo.png";
function Header_Nav({ buton, selected }) {
    let boton = [titulo= "", link= ""];
    return (
        <header className="flex justify-between items-centmt-10er bg-gray-200 w-[95%] my-4 rounded-4xl ">
            <nav className="w-full flex items-center justify-around">
                <div class="flex basis-1/8 items-center ">
                    <img src={Logo} alt="Logo De Jobee" class="h-23" />
                    <p className="text-xl font-bold">JoBee</p>
                </div>
                <ul>
                    {boton.map((boton, index) => (
                        <li key={index}>
                            <Link to={boton.link}>
                                <button
                                    className={
                                    boton.title === selected
                                        ? "button_selected"
                                        : "buttons_interactive"
                                    }
                                >
                                    {boton.title}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
 }
 export default Header_Nav;