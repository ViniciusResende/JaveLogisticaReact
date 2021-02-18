import React, { useState, useEffect } from 'react';

import './styles.css';

import RegiaoSudeste from '../../assets/images/sudeste.jpg';
import RegiaoSul from '../../assets/images/sul.jpg';

export default function Attendance(display){
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
    <div className="attendanceContainer" style={{transform: `translateX(${translatePercentage})`}}>
      <h1>Praças de atendimento e serviços</h1>
      <div className="subcontent">        
          <div class="border-box">
            <h2>Serviços</h2>
            <ul>
                <li>Transporte de cargas em geral para as regiões abaixo (fracionado acima de 500 kg)</li>
                <li>Cargas fechadas para todo o Brasil</li>
                <li>Locações diárias, semanais ou mensais de veículos com motorista para empresas</li>
                <li>Armazenamento de cargas e descarga</li>
                <li>Demais Estados, fracionado sob consulta</li>
            </ul>
          </div>
      </div>
      <div>
        <div class="subcontent">
          <div class="border-box">    
              <h2>Praças de Atendimento</h2>
              <div class="clearfix">
                  <div class="pull-left image-split"><img src={RegiaoSudeste} alt="Região Sudeste"/></div>
                  <div class="pull-left image-split"><img src={RegiaoSul} alt="Região Sul"/></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}