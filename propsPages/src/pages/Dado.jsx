import Titulo from "../components/Titulo"
import './Dado.css'
import { useState } from "react";
import { LuDices } from "react-icons/lu";
import { CgDice1 } from "react-icons/cg";
import { CgDice2 } from "react-icons/cg";
import { CgDice3 } from "react-icons/cg";
import { CgDice4 } from "react-icons/cg";
import { CgDice5 } from "react-icons/cg";
import { CgDice6 } from "react-icons/cg";

function Dado(){

    const [numero, setNumero]= useState(<LuDices />)
    const dados= [<CgDice1 />,<CgDice2 />,<CgDice3 />,<CgDice4 />,<CgDice5 />,<CgDice6 />]

    function sortearDado(){

        let n= Math.floor(Math.random() *6)
        setNumero(dados[n])

        
    }
    


return(

    <div className='Dado-container'>

    <Titulo text={"DADO"} emoji={"🎲"}/>

    <button className="btnJogar" onClick={sortearDado}>Jogar</button>

    <div className="numeroDado">

    {numero}

    </div>

  
  
</div>


)
}
export default Dado