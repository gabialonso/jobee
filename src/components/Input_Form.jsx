{/*-----------------------Icons-----------------------*/}
import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5"; //Ojo cerrado
import { IoEyeOutline } from "react-icons/io5"; //Ojo abierto
import { GoMail } from "react-icons/go"; //Icono de mail
import { FaRegUser } from "react-icons/fa"; //Icono de usuario
import { HiOutlineIdentification } from "react-icons/hi2"; //Icono de identificacion
import { GrGroup } from "react-icons/gr"; //Icono de grupo
import { RiGroupLine } from "react-icons/ri"; //Icono de grupo social
import { LiaBirthdayCakeSolid } from "react-icons/lia"; //Icono de cumpleaños
import { CiBank } from "react-icons/ci"; //Icono de razon social
import { RiLockPasswordLine } from "react-icons/ri"; //Icono de contraseña

function Input_Form({ type, id, placeholder, value, onChange }) {
    const [mostrar, setMostrar] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);
    
    if (type === "password") {
        if(id==="password"){
            return (
                <div className="flex border-1 rounded-lg mx-2 w-4/6 flex justify-around bg-white">
                    <input
                        className="pl-1 py-0 w-full rounded-l-lg placeholder-black/50"
                        type={mostrar ? "text" : "password"}
                        id="password"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required
                    />
                    <button type="button" onClick={() => setMostrar(!mostrar)}>
                        {mostrar ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                    </button> 
                </div>
            )
        }else{
            return (
                <div className="flex border-1 rounded-lg mx-2 w-4/6 flex justify-around bg-white">
                    <input
                        className="pl-1 py-0 w-full rounded-l-lg placeholder-black/50"
                        type={mostrar2 ? "text" : "password"}
                        id="password"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required
                    />
                    <button type="button" onClick={() => setMostrar2(!mostrar2)}>
                        {mostrar2 ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                    </button> 
                </div>
            )
        }
    } else if (type === "date") {
        return (
            <div className="w-4/6">
            <input
                className="border-1 rounded-lg pl-1 w-full py-0 bg-white placeholder-black/50"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                }}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
          </div>
        )
    }else{
        return (
            <p></p>
        )
    }
}

 export default Input_Form;
 {/*
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
    */}