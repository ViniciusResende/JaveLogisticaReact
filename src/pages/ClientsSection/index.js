import React, { useState, useEffect } from 'react';
import Slideshow from '../../components/Slideshow';

import './styles.css';

export default function ClientsSection(display){
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
  return(
    <div className="ClientsSectionContainer" style={{transform: `translateX(${translatePercentage})`}}>
      <h1>Nossos Clientes</h1>
      <div className="border-box">
        <div className="ClientSlideshow">
          <Slideshow interval={3000}
          images={[
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/via_varejo_jes6iy.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/pharma_lzh0ag.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/magazine_r9hczf.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/port_info_mpyhr1.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/Palmares_yh8hbt.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/tozzi_nzjw2f.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658957/Jav%C3%A9/ParnersLogo/minaslub_jews7z.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658956/Jav%C3%A9/ParnersLogo/decminas_a6uvtn.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658956/Jav%C3%A9/ParnersLogo/Heineken_eco5as.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658956/Jav%C3%A9/ParnersLogo/A%C3%87ONIL_blx4j8.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658956/Jav%C3%A9/ParnersLogo/Boreda_hepu8x.png',
            'https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613658956/Jav%C3%A9/ParnersLogo/Gamasa_ctcwma.png',
          ]}
          />
        </div>
      </div>
    </div>
  )
}