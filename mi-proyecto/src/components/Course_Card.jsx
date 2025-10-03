 function Course_Card({ plan, title, description }) {
    let levelplan = "";
    let cssplan = "";
    switch (plan) {
        case 'basico':
            levelplan = "Plan Basico";
            cssplan = "basic_plan";
            break;
        case 'medio':
            levelplan = "Plan Medio";
            cssplan = "medium_plan";
            break;
        case 'avanzado':
            levelplan = "Plan Avanzado";
            cssplan = "advanced_plan";
            break;
        default:
            levelplan = "Error: Plan Desconocido";
            cssplan = "bg-[#DC2626] text-white text-center font-bold rounded-b-2xl";
            break;
    }
    
    
    
    return <div className={`curses_card`}>
        <p className={cssplan}>{levelplan}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <button className="buttons_interactive">ir al curso</button>
    </div>;
}
export default Course_Card;