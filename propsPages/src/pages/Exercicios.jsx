import { useState } from "react"
import Titulo from "../components/Titulo"

function Exercicios() {

    const [resultado, setResultado]= useState()
    function rodar525(){

        let precoProduto= Number(prompt('Digite o valor do produto R$: '))
        let moedas1= Number(prompt('Quantas moedas de R$1,00?'))
        let moedas50= Number(prompt('Quantas moedas de R$0,50?'))
        let moedas25= Number(prompt('Quantas moedas de R$0,25?'))
        let moedas10= Number(prompt('Quantas moedas de R$0,10?'))
        let moedas5= Number(prompt('Quantas moedas de R$0,05?'))

        let somaMoedas= ((moedas1= moedas1*1) + (moedas50= moedas50*0.50)+ (moedas25= moedas25*0.25)+ (moedas10= moedas10* 0.10)+ (moedas5= moedas5*0.05))

        let diferencaPreco= somaMoedas - precoProduto
        if(diferencaPreco < 0 ){

            setResultado('Você não pode comprar porque não tem dinheiro suficiente no porquinho:(\nDinheiro em moedas: R$ '+somaMoedas+'\nPreço do produto R$: '+precoProduto+'\nValor faltando R$: '+diferencaPreco)
        }else{

            setResultado('Você não pode comprar porque não tem dinheiro suficiente no porquinho:(\nDinheiro em moedas: R$ '+somaMoedas+'\nPreço do produto R$: '+precoProduto+'\nValor faltando R$: '+diferencaPreco)
        }
        

       

    }

  return (
    <div className="porquinho-container">

    <Titulo text={"Porquinho"} emoji={"🐖"}/>

    <button onClick={rodar525}>Exercício 5.25</button>
    {resultado}
      
    </div>
  )
}

export default Exercicios
