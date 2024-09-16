import React, { useState } from 'react'
import { FaExchangeAlt } from "react-icons/fa";
import './ArCondicionado.css'

function ArCondicionado() {

    const [inputCelsius, setInputClecius]= useState('')
    const [ inputFarenheit, setInputFarenheit]= useState('')

    function mudouCelcius(event){
        setInputClecius(event.target.value)
        let f= event.target.value *1.8 + 32
        setInputFarenheit(f.toFixed(2))

    }
    function mudouFarenheit(event){
        setInputFarenheit(event.target.value)
        let c= (event.target.value -32) /1.8 
        setInputClecius(c.toFixed(2))
    }

  return (
    <div className='containerExercicio'>
        <h1>5.27 Ar Condicionado</h1>
      <p>5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>

      <div className="form-container">
          <div className="input-celcius">
              <label htmlFor="inpC">Celcius</label>
              <input type="number" id='inpC'
              value={inputCelsius}
              onChange={mudouCelcius}
              />
          </div>
          <div>
          <FaExchangeAlt />
          </div>
          <div className="input-farenheit">
              <label htmlFor="inpF">Fahrenheit</label>
              <input type="number" id='inpF'
              value={inputFarenheit}
              onChange={mudouFarenheit}/>
          </div>
          
      </div>
    </div>
  )
}

export default ArCondicionado
