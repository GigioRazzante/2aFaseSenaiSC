import { useState } from 'react'
import './Fila.css'

function Fila() {
  
  const [fila, setFila]= useState([])
  const [proximaSenha, setProximaSenha]= useState(1)
  const [filaP, setFilaP]= useState([])
  
  function gerarSenha(){

    let senha= {
      numero: proximaSenha,
      tipo: "normal"
    }


    setFila([...fila,senha]) 
    setProximaSenha(proximaSenha + 1)
  }
  function gerarSenhaP(){

    let senha= {
      numero: proximaSenha,
      tipo: "preferencial"
    }

    setFilaP([...filaP,senha])
    setProximaSenha(proximaSenha + 1)
  }
  
  function atender(){
    if (filaP.length){
      alert( filaP[0].numero)
      setFilaP(filaP.slice(1))
      return
    }
    if(fila.length){
     alert( fila[0].numero)
     setFila(fila.slice(1))
     return
    }
  }
  return (

    <>
      <div className="divFila-container">
          <button className='btnsFila' onClick={gerarSenha}>Senha Normal
          </button>
          <button className='btnsFila' onClick={gerarSenhaP}>Senha Preferencial
          </button>
          <button className='btnsFila' onClick={atender}>Atender
          </button>
          </div>
          {fila.map( (senha) => (
            <div className='senhas-container' key={senha.numero}>
              <p>{senha.numero}</p>
              <p>{senha.tipo}</p>
            </div>
          
          ))}
          {filaP.map( (senha) => (

            <div className="senhas-container" key={senha.numero}>
                <p>{senha.numero}</p>
                <p>{senha.tipo}</p>
            </div>

          ))}
      
    </>
  )
}

export default Fila
