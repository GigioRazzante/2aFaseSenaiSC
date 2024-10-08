import React, { useState } from 'react'
import TemDinheiro from '../assets/components/TemDinheiro'
import FaltaDinheiro from '../assets/components/FaltaDinheiro'
import './Porquinho.css'

function Porquinho() {

    const [inputPreco, setInputPreco]= useState('')
    const [input1real, setInput1real]= useState('')
    const [input50cent, setInput50cent]= useState('')
    const [input25cent, setInput25cent]= useState('')
    const [input10cent, setInput10cent]= useState('')
    const [input5cent, setInput5cent]= useState('')
    const [sobrou, setSobrou]= useState(false)
    const [faltou, setFaltou]= useState(false)

    function quebrarPorco(){

        let dinheiro = input1real*1 + input50cent*0.50 + input25cent*0.25 + input10cent*0.10 + input5cent*0.05

        if(dinheiro >= inputPreco){
            setSobrou(true)
            setFaltou(false)
        }else{
            setSobrou(false)
            setFaltou(true)
        }
    }
  return (
    <div>
        <h1>5.25 Porquinho</h1>
        <p>5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:  N moedas de 1 real;  N moedas de 50 centavos;  N moedas de 25 centavos;  N moedas de 10 centavos;  N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X. </p>

        <div className='input-preco'>
                <label htmlFor="inpPreco">Preço</label>
                <input type="number" id='inpPreco'
                value={inputPreco}
                onChange={(event) => setInputPreco(event.target.value)}
                />

            </div>

        <div className='form-container'>
            <div className='inputs-container'>
                <label htmlFor="inp1real">R$1,00</label>
                <input type="number" id='inp1real' 
                value={input1real}
                onChange={(event) => setInput1real(event.target.value)}/>

            </div>
            <div className='inputs-container'>
                <label htmlFor="inp50cent">R$0,50</label>
                <input type="number" id='inp50cent'
                value={input50cent}
                onChange={(event) => setInput50cent(event.target.value)} />

            </div>
            <div className='inputs-container'>
                <label htmlFor="inp25cent">R$0,25</label>
                <input type="number" id='inp25cent'
                value={input25cent}
                onChange={(event) => setInput25cent(event.target.value)} />

            </div>
            <div className='inputs-container'>
                <label htmlFor="inp10cent">R$0,10</label>
                <input type="number" id='inp10cent'
                value={input10cent}
                onChange={(event) => setInput10cent(event.target.value)} />

            </div>
            <div className='inputs-container'>
                <label htmlFor="inp5cent">R$0,05</label>
                <input type="number" id='inp5cent' 
                value={input5cent}
                onChange={(event) => setInput5cent(event.target.value)}/>

            </div>
           
        </div>
        <button className='btnQuebrarPorquinho' onClick={quebrarPorco}>Quebrar Porquinho</button>
            {sobrou && <TemDinheiro/>}
            {faltou && <FaltaDinheiro/>}
      
    </div>
  )
}

export default Porquinho
