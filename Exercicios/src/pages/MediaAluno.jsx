import React, { useState } from 'react'
import './MediaAluno.css'

function MediaAluno() {

    const [inputNota1, setNota1] = useState('')
    const [inputNota2, setNota2] = useState('')
    const [mediaNotas, setMediaNotas] = useState('')
    const [categoriaNota, setCategoriaNota]= useState('')

    function VerRelatorio(){
        
      let media = (inputNota1*1 + inputNota2*1) /2

      setMediaNotas(media)
      if(media >= 9 && media <=10){

        setCategoriaNota('A')

      }
      else if(media >= 7.5 && media <9){

        setCategoriaNota('B')

      }
      else if(media >= 6 && media <7.5){

        setCategoriaNota('C')

      }
      else if(media >= 4 && media <6){

        setCategoriaNota('D')

      }
      else if(media >= 0 && media <4){

        setCategoriaNota('E')

      }
    }

    return (
        <div>
            <div className='exercicio-container'>
                <h1>5.24 Média do Aluno</h1>
                <p>5.24 – Faça um programa que leia duas notas parciais obtidas por um
                    aluno qualquer numa disciplina qualquer ao longo de um semestre
                    qualquer, e calcule a sua média. De posse da média, esta deve ser
                    convertida em conceito que é o novo hype do momento na educação!
                    A conversão deve seguir a regra descrita abaixo:
                    Nota Conceito
                    Entre 9.0 e 10.0 A
                    Entre 7.5 e 9.0 B
                    Entre 6.0 e 7.5 C
                    Entre 4.0 e 6.0 D
                    Entre 0.0 e 4.0 E
                    O resultado deste programa deve ser um relatório contendo as notas do
                    aluno, sua média e o conceito atingido.

                </p>
            </div>
            <div className="divInputs">
                <div className='inputNotas'>
                    <label htmlFor="inpN1">Digite sua nota 1:</label>
                    <input type="number" id='inpN1' placeholder='(0 - 10)'
                        value={inputNota1}
                        onChange={(event)=> setNota1(event.target.value)} />
                </div>
                <div className='inputNotas'>
                    <label htmlFor="inpN2">Digite sua nota 2:</label>
                    <input type="number" id='inpN2' placeholder='(0 - 10)'
                     value={inputNota2}
                     onChange={(event)=> setNota2(event.target.value)} />
                </div>
            </div>
            <div className='button-relatorio'>

                <button onClick={VerRelatorio} className='btnRelatorio' >Ver Relatório</button>
                <p>{'Nota 1: ' +inputNota1}</p>
                <p>{'Nota 2: ' +inputNota2}</p>
                <p>{'Média: '+mediaNotas}</p> 
                <p>{'Categoria: ' +categoriaNota}</p>
                

            </div>

        </div>
    )
}

export default MediaAluno
