import './Body.css'
import ButtonFC from './ButtonFC'

function Body(){
    return(
        <div className='Body-container'>

            <label className='lblSobreNos'>Sobre Nós</label>
            <img className='imgUmBody' src="/images/farmarciaBody.png" alt="" />
            <label className='lblTextoSobreNos'>Bem-vindo à Farmácia Saúde & Vida! Há mais de 10 anos, nossa missão é oferecer bem-estar e saúde à nossa comunidade com um atendimento personalizado e de excelência.

Nosso compromisso vai além da simples dispensação de medicamentos. Contamos com uma equipe de farmacêuticos altamente qualificados que estão sempre prontos para fornecer orientações precisas e ajudar com suas necessidades de saúde. Além disso, nossa farmácia oferece uma ampla gama de produtos de saúde e beleza, suplementos alimentares e produtos naturais, tudo cuidadosamente selecionado para garantir a melhor qualidade para nossos clientes.

Na Farmácia Saúde & Vida, acreditamos que cada cliente é único e merece atenção especial. Nossa equipe está dedicada a criar uma experiência acolhedora e eficiente, com um atendimento que visa não apenas resolver suas necessidades imediatas, mas também promover um estilo de vida mais saudável e equilibrado.

Venha nos visitar e descubra por que somos a farmácia de confiança da nossa comunidade. Sua saúde e satisfação são a nossa prioridade!</label>

            <label className='lblNossaHistoria'>Nossa História</label>
            <img className='imgNossaHistoria' src="/images/farmarciaPlaca.png" alt="" />
            <label className='TextoNossaHistoria'>A Farmácia Saúde & Vida nasceu do sonho de um grupo de profissionais apaixonados por saúde e bem-estar. Fundada em 2013, nossa jornada começou com a visão de criar um espaço onde o cuidado com o cliente fosse a prioridade, e onde cada pessoa pudesse encontrar não apenas medicamentos, mas também apoio e orientação para uma vida mais saudável.

Desde o início, nosso objetivo foi oferecer um atendimento diferenciado, que combina conhecimento técnico com um toque pessoal. Começamos com uma pequena loja no coração da cidade, e ao longo dos anos, nossa dedicação ao atendimento de qualidade e ao bem-estar de nossos clientes nos permitiu crescer e expandir.

Cada passo da nossa história é marcado pela busca constante de inovação e excelência. Investimos em tecnologia de ponta para garantir a precisão na dispensação de medicamentos e na gestão da saúde, além de promover parcerias com fornecedores de confiança para oferecer produtos de alta qualidade.

Nosso compromisso com a comunidade é o que nos motiva diariamente. Ao longo dos anos, tivemos o privilégio de participar de diversas iniciativas locais de saúde e bem-estar, sempre com o objetivo de contribuir positivamente para a vida das pessoas ao nosso redor.

Hoje, a Farmácia Saúde & Vida é mais do que uma farmácia – é um ponto de referência para quem busca cuidados especializados e um atendimento humanizado. Estamos ansiosos para continuar nossa trajetória, sempre com o compromisso de melhorar a saúde e a qualidade de vida de nossos clientes.

Obrigado por fazer parte da nossa história. Juntos, continuaremos a trilhar o caminho do cuidado e da excelência.</label>

                <label className='nossosProdutos'>Nossos Produtos</label>
                <div className="divImgProdutos"><img className='imgCamisetas1e2' src="/images/farmarciaCamisetas1.png" alt="" /><img className='imgCamisetas1e2' src="/images/farmarciaCamiseta2.png" alt="" /></div>
                <label className='textoNossosProdutos'>Na Farmácia Saúde & Vida, oferecemos uma vasta gama de produtos para atender às suas necessidades de saúde e bem-estar:

Medicamentos e Prescrições: Medicamentos de qualidade e orientações especializadas.
Suplementos Alimentares: Vitaminas, minerais e produtos naturais.
Saúde e Bem-Estar: Produtos para cuidados diários e controle de condições de saúde.
Cosméticos e Beleza: Cuidados para pele, cabelo e maquiagem.
Cuidados Naturais: Fitoterápicos e opções naturais.
Primeiros Socorros: Itens essenciais para emergências e cuidados básicos.
Nosso compromisso é garantir qualidade e segurança em cada produto. Visite-nos e encontre o que você precisa para uma vida mais saudável!

</label>
            <ButtonFC />



        </div>
    )



}

export default Body