import React,{useState, useEffect} from 'react';

import './styles.css';

import GalpaoSede from '../../assets/images/galpao1.jpg';

export default function Company(display){
  const [isInDisplay, setIsInDisplay] = useState(false);
  const [translatePercentage, setTranslatePercentage] = useState('100%');
  useEffect(() => {
    setIsInDisplay(display.display);
    if (isInDisplay){
      setTranslatePercentage('0%');
    } else {
      setTranslatePercentage('100%');
    }
    return;
  });
  return (
    <div className="companyContainer" style={{transform: `translateX(${translatePercentage})`}}>
      <h1>A empresa</h1>
      <div className="subcontent">        
        <div class="divider">
          <img src={GalpaoSede} alt="Sede da empresa"/>
          <div class="border-box" style={{paddingBottom: '3vw'}}>
            <p>A Javé Log foi criada em Novembro de 2014 com o objetivo de prover soluções em transporte de cargas com eficiência e integridade nas entregas.</p>
            <p>A empresa procura se aproximar do cliente de forma a cumprir seus critérios com exatidão e agregar valor ao seu negócio.</p>
            <p>Atualmente a empresa atua no transporte de cargas secas e está preparada para atender demandas de entregas em todo o território nacional.</p>
          </div>
       </div>
      </div>      
      <div class="subcontent">
        <div class="border-box">    
          <h2>Missão</h2>
          <p>Oferecer serviços e soluções de qualidade no setor de transporte de cargas, que contribuam para o sucesso dos nossos clientes e ampliem nossos resultados.</p>
        </div>
      </div>
      <div class="subcontent">
        <div class="border-box">
          <h2>Visão</h2>
          <p>Ser a cada dia referência na oferta de soluções de logística e transporte de cargas no Brasil.</p>
        </div>
    </div>
    <div class="subcontent">
      <div class="border-box">
        <h2>Valores</h2>
        <ul class="split clearfix">
          <li>Ética</li>
          <li>Satisfação dos clientes</li>
          <li>Trabalho em equipe</li>
          <li>Valorização das pessoas</li>
          <li>Melhoria contínua</li>
          <li>Contribuição ao desenvolvimento econômico-social da sociedade</li>   
        </ul>
      </div>
    </div>
      
    </div>
  )
}