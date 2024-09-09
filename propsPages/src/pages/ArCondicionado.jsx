import React, { useState } from 'react'

function ArCondicionado() {
    const [inputCelcius, setInputCelcius]= useState()
    const [fahrenheit, setFarenheit]= useState()

    function mudouCelcius(event){

        console.log(event)
        setInputCelcius(event.target.value)
    }

    function converterCparaF(){

        let f= inputCelcius * 1.8 + 32
        setFarenheit("Temperatura em graus F:" + f)

    }

  return (
    <div>
      
      <label htmlFor="">Digite a temperatura em graus Celcius:</label>
      <input type="text" className='entrada'
        value={inputCelcius}
        onChange={mudouCelcius}
      />

      <button onClick={converterCparaF}>Converter</button>

        <p>{inputCelcius}</p>
        <p>{fahrenheit}</p>

    </div>
  )
}

export default ArCondicionado
