import { useState } from 'react'
import './App.css'

function App() {
  
  const [fila, setFila]= useState([])
  
  function gerarSenha(){

    let senha= {
      numero: Date.now(),
      tipo: "normal"
    }

    setFila([...fila,senha]) 
  }
  function atender(){
    if (fila.length){
      alert( fila[0].numero)
      // let filaTemp = fila
      // filaTemp.splice(0, 1)
      setFila(fila.slice(1))

    }else{
      alert("Fila VAZIA... ")
    }
  }
  return (

    <>
      <button onClick={gerarSenha}>Senha Normal
      </button>
      <button onClick={atender}>Atender
      </button>
      {fila.map( (senha) => (
        <div key={senha.numero}>
          <p>{senha.numero}</p>
          <p>{senha.tipo}</p>
        </div>
        

      ))}
    </>
  )
}

export default App
