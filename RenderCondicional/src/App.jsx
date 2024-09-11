import { useState } from 'react'
import './App.css'
import OlaUsuario from './components/OlaUsuario'
import AreaParaAdultos from './components/AreaParaAdultos';
import Login from './components/Login';

function App() {
  
  const[logado, setLogado]= useState(true);
  const[idade, setIdade]= useState(0)
  function logar(){
    setLogado(true)
  }

  return (
    <>
    <div className='render-container'>

      {logado && <OlaUsuario/>}
      <button onClick={logar}>Logar</button>
      <button onClick={()=> setLogado(false)}>Deslogar</button>
      <button onClick={()=> setLogado(!logado)}>Alternar</button>
     
    </div>
    <div className='render-container'>

      <button onClick={() => setIdade(idade - 1)}>-</button>
      {idade}
      <button onClick={() => setIdade(idade + 1)}>+</button>
      {idade>= 18 && <AreaParaAdultos/>}

    </div>
    <div className='render-container'>

      {logado ? <OlaUsuario/> : <Login/>} 
      

    </div>

     
    </>
  )
}

export default App
