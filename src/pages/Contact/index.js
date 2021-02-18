import React,{useState, useEffect} from 'react';

import './styles.css'

export default function Contact(display){
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
    <div className="contactContainer" style={{transform: `translateX(${translatePercentage})`}}>
      <h1>Contato</h1>
      <div className="clearfix">
        <div className="border-box half">
          <h2>Telefone</h2>
          <a href="tel: +553125651008">(31) 2565-1008</a>
        </div>
        <div className="border-box half">
          <h2>E-mail</h2>
          <a href="mailto:contato@javelog.com.br">contato@javelog.com.br</a>
        </div>
      </div>
      <div>
        <div class="border-box address">
          <input id="showMap" type="checkbox"></input>
          <label class="map-toggle map-show" for="showMap" tabindex="0">Mostrar mapa</label>
          <label class="map-toggle map-hide" for="showMap" tabindex="0">Ocultar mapa</label>
          <h2>Endereço</h2>
          <a href="https://goo.gl/maps/FcTeEcTid5P2" target="_blank">
              R. Sagitário, 461 -
              Jardim Riacho das Pedras -
              Contagem, MG -
              CEP: 32242-210
          </a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8905966006528!2d-44.066856885084874!3d-19.971102686580675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bfb1237efe19%3A0xaac568baf5902f02!2sR.+Sagit%C3%A1rio%2C+461+-+Jardim+Riacho+das+Pedras%2C+Contagem+-+MG%2C+32242-210!5e0!3m2!1spt-BR!2sbr!4v1472773840965" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}