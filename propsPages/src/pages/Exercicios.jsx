import { useState } from "react"
import Titulo from "../components/Titulo"
import './Exercicio.css'

function Exercicios() {

    const [resultado, setResultado]= useState()
    function rodar525(){

        let precoProduto= Number(prompt('Digite o valor do produto R$: '))
        let moedas1= Number(prompt('Quantas moedas de R$1,00?'))
        let moedas50= Number(prompt('Quantas moedas de R$0,50?'))
        let moedas25= Number(prompt('Quantas moedas de R$0,25?'))
        let moedas10= Number(prompt('Quantas moedas de R$0,10?'))
        let moedas5= Number(prompt('Quantas moedas de R$0,05?'))

        let somaMoedas= ((moedas1= moedas1*1) + (moedas50= moedas50*0.50)+ (moedas25= moedas25*0.25)+ (moedas10= moedas10* 0.10)+ (moedas5= moedas5*0.05)).toFixed(2)

        let diferencaPreco= (somaMoedas - precoProduto).toFixed(2)
        if(diferencaPreco < 0 ){

            setResultado(`Você não pode comprar:( \nDinheiro no porquinho R$: ${somaMoedas} Preço do produto R$: ${precoProduto} \nQuantia que falta R$: ${diferencaPreco}`)
        }else{

          setResultado(`Você pode comprar:) \nDinheiro no porquinho R$: ${somaMoedas} Preço do produto R$: ${precoProduto} \nQuantia que sobra R$: ${diferencaPreco}`)
        }
        

       

    }
    const [notas, setNotas]= useState()
    function rodar526(){

      let vetorNotas=[]
      let vetorPesoNotas= []

      for(let i=0; i < 4; i++){

        let notasDigitadas
        do{

          notasDigitadas=Number(prompt('Digite suas 4 notas: (nota1, nota2, nota3, nota4) '))

        }while(notasDigitadas> 10)

        vetorNotas.push(notasDigitadas)
        
       }
       
      for( let i=0; i < 4; i++){
       
        let pesoNotasDigitadas
        pesoNotasDigitadas= Number(prompt(`Digite o peso das suas respectivas notas: ${vetorNotas}`))
        vetorPesoNotas.push(pesoNotasDigitadas)

      }

      let nota1= vetorNotas[0]
      let nota2= vetorNotas[1]
      let nota3= vetorNotas[2]
      let nota4= vetorNotas[3]
      let somaNotas= (nota1+nota2+nota3+nota4)

      let pesoNota1= vetorPesoNotas[0]
      let pesoNota2= vetorPesoNotas[1]
      let pesoNota3= vetorPesoNotas[2]
      let pesoNota4= vetorPesoNotas[3]
      let somaPesoNotas= (pesoNota1+pesoNota2+pesoNota3+pesoNota4) 
      
      let mediaNotas= (((nota1*pesoNota1)+(nota2*pesoNota2)+(nota3*pesoNota3)+(nota4*pesoNota4))/somaPesoNotas).toFixed(2) 

      if(mediaNotas>=7){
      
        setNotas(`APROVADO Notas: ${vetorNotas} Peso Notas: ${vetorPesoNotas} Média ponderada: ${mediaNotas}`)
        
      }else{

        setNotas(`REPROVADO Notas: ${vetorNotas} Peso Notas: ${vetorPesoNotas} Média ponderada: ${mediaNotas}`)

      }
      




     

  }

  return (
    <div className="porquinho-container">

    <Titulo text={"Porquinho"} emoji={"🐖"}/>

    <div className="elementoBtnExercicio">

    <button className="btnExercicio" onClick={rodar525}>Exercício 5.25</button>
    <button className="btnExercicio" onClick={rodar526}>Exercício 5.26</button>

    </div>

    <div className="setTexto">

      

    </div>
    
    {resultado}
    {notas}
     
    </div>
  )
}

export default Exercicios
