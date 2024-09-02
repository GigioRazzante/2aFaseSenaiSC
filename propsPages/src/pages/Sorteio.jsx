import { useState } from "react";
import Titulo from "../components/Titulo"
import './Sorteio.css'

function Sorteio() {

  const [numero, setNumero]= useState(0)
  const [dado, setDado]= useState()

    function sortear(){

       let numeroAleatorio= Math.floor(Math.random() *100) + 1;
       setNumero(numeroAleatorio)

    }
    function aumentar(){

      setNumero(numero+1)
    }
    function diminuir(){

      setNumero(numero-1)
    }
  return (
    <div className='sorteio-container'>

        <Titulo text={"Sorteio"} emoji={"🎲"}/>

        <button className="btnAumentar" onClick={aumentar}>+</button>

        <div className="numero-container">

        {numero}

        </div>

      <button className="btnDiminuir" onClick={diminuir}>-</button>

        <button onClick={sortear} className="btnSortear">Sortear número</button>
      
    </div>
  )
}

export default Sorteio
