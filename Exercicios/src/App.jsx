import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import Comerciante from './pages/Comerciante'
import MediaAluno from './pages/mediaAluno'


function App() {
const [pagina, setPagina]= useState()
  return (
    <>
    <h1>Exercícios📓 </h1>
    <nav className='buttonsExercicios-container'>
      <button className='buttonsExercicio' onClick={()=> setPagina(<ArCondicionado/>)}>5.27</button>
      <button className='buttonsExercicio' onClick={()=> setPagina(<Porquinho/>)}>5.25</button>
      <button className='buttonsExercicio' onClick={()=> setPagina(<Comerciante/>)}>5.23</button>
      <button className='buttonsExercicio' onClick={()=> setPagina(<MediaAluno/>)}>5.24</button>
      
    
    </nav>

        {pagina}

    </>
  )
}

export default App
