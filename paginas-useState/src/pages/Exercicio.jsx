import React, { useState } from 'react'

function Exercicio() {
    const [inputDiarias, setInputDiarias]= useState()
  return (
    <div>
      <input className='inputDiarias' type="number" placeholder='Número de diárias...' value={inputDiarias}onChange={(event)=> setInputDiarias(event.target.value)}/>
      <button onClick={()=> setInputDiarias()}>Calcular</button>
    
      <p></p>

    </div>

  )
}

export default Exercicio
