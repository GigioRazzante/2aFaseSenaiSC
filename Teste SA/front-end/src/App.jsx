import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')

  function handleClick (e) {

      setUsername(e.target.value)
      console.log({username})
      
    }
  function handleChange (e) {

    setUsername(e.target.value)
    console.log({username})

}

  return (
    <>
      <div className='div-container'>

        <div className='titulo-container'>

          <h1>Vaaaai neimá😫</h1>

        </div>
        <div className="div-elementos">
          <input type="text" value={username} onChange={handleClick} />
          <button onClick={handleClick}> Cadastrar</button>
        </div>

      </div>
    </>
  )
}

export default App
