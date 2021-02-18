import React, { useState, useEffect } from 'react';
import { Truck, ShoppingBag, Repeat, GitPullRequest } from "react-feather";

import './styles.css';

export default function Solutions(display){
  const [transferColor, setTransferColor] = useState("#fff");
  const [truckShopColor, setTruckShopColor] = useState("#fff");
  const [crossColor, setCrossColor] = useState("#fff");
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


  function transferMouseEnter(){
    setTransferColor("#000")
  }

  function transferMouseLeave(){
    setTransferColor("#fff")
  }

  function truckShopMouseEnter(){
    setTruckShopColor("#000")
  }

  function truckShopMouseLeave(){
    setTruckShopColor("#fff")
  }

  function crossMouseEnter(){
    setCrossColor("#000")
  }

  function crossMouseLeave(){
    setCrossColor("#fff")
  }

  return (
    <div className="SolutionsContainer" style={{transform: `translateX(${translatePercentage})`}}>
      <input id="solutionTruck" type="radio" name="solution" value="truck"/>
      <input id="solutionTransfer" type="radio" name="solution" value="transfer"/>
      <input id="solutionCross" type="radio" name="solution" value="cross"/>
      <h1>Soluções</h1>
      <div className="solutions">
        <label for="solutionTruck" className="solution solution-truck" onMouseEnter={truckShopMouseEnter} onMouseLeave={truckShopMouseLeave}>
          <div className="solution-icon">
            <div className="hexagon"></div>            
            <span className="im-truck-shop">
              <Truck color={truckShopColor} size={90}/>
              <ShoppingBag color={truckShopColor} size={90}/>
            </span>          
          </div>
          <h2>Coleta e entrega<br/>porta a porta</h2>
        </label>
        <label for="solutionTransfer" className="solution solution-transfer" onMouseEnter={transferMouseEnter} onMouseLeave={transferMouseLeave}>
          <div className="solution-icon">
            <div className="hexagon"></div>
            <span className="im-transfer">
              <Repeat color={transferColor} size={90}/>
            </span>
          </div>
          <h2>Transferências</h2>
        </label>
        <label for="solutionCross" className="solution solution-cross" onMouseEnter={crossMouseEnter} onMouseLeave={crossMouseLeave}>
            <div className="solution-icon">
              <div className="hexagon"></div>
              <span className="im-cross">
                <GitPullRequest color={crossColor} size={90}/>
              </span>
            </div>
            <h2>Cross Docking</h2>
        </label>
      </div>
      <div className="solution-slider">
        <div className="slides">
          <div className="slide slide-truck">
            <div className="border-box">
              <h3>Coleta e entrega porta a porta</h3>
              <p>A partir da solicitação de transporte, a Javé Log coleta os produtos nas instalações do cliente e realiza a entrega no destino solicitado.</p>
              <p>Esse tipo de serviço proporciona maior praticidade e comodidade ao cliente.</p>
            </div>
          </div>
          <div className="slide slide-transfer">
            <div className="border-box">
              <h3>Transferências</h3>
              <p>Serviço de transferências de cargas (lotação) para os respectivos destinos solicitados pelos clientes.</p>
              <p>Esse tipo de serviço permite entregas mais ágeis para os clientes finais.</p>
            </div>
          </div>
          <div className="slide slide-cross">
            <div className="border-box">
              <h3>Cross Docking</h3>
              <p>Processo de distribuição em que a mercadoria recebida é redirecionada para nossa base, catalogada e separada, para então seguir ao seu destino final.</p>
              <p>Esse tipo de serviço permite maior redução de custos logísticos para o cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}