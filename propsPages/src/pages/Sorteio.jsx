import Titulo from "../components/Titulo"
import './Sorteio.css'

function Sorteio() {
    function sortear(){

       let numeroAleatorio= Math.floor(Math.random() *100) + 1;
       alert(numeroAleatorio)

    }
  return (
    <div className='sorteio-container'>

        <Titulo text={"Sorteio"} emoji={"🎲"}/>
        <button onClick={sortear} className="btnSortear">Sortear número</button>
      
    </div>
  )
}

export default Sorteio
