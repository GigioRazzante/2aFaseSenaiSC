import React, { useState } from 'react'
import './Comerciante.css'

function Comerciante() {

    const[valorProduto, setValorProduto]= useState('')
    const[valorDeVenda, setValorDeVenda]= useState('')

    function CalcularValorVenda(){

        let valorMenor= 20
        if(valorProduto < valorMenor){
            setValorDeVenda(valorProduto*1.45)
        }else{
            setValorDeVenda(valorProduto*1.30)
        }

    }


  return (
    <div className='form-container'>
        <div className='exercicio-container'>
            <h1>5.23 Comerciante </h1>
            <p>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
        45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
        será de 30%. Faça um programa que entre com o valor do produto e mostre 
        o valor de venda</p>
        
        </div>
        <div className='inputValorProduto'>
            <label htmlFor="inpVP">Valor compra:</label>
            <input type="number" id='inpVP' placeholder='R$'
            value={valorProduto}
            onChange={(event) => setValorProduto(event.target.value)}/>

        </div>
        <div className='button-container'>

            <button className='btnValorVenda' onClick={CalcularValorVenda}>Ver Valor de Venda</button>
            {"R$: "+valorDeVenda}
        </div>
    </div>
  )
}

export default Comerciante
