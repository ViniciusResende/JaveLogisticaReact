import React, {useState, useEffect} from 'react';

import './styles.css';

import MenuItem from './MenuItem'

const menuItemsOptions = [
  { text: 'Home' },
  { text: 'Soluções' },
  { text: 'A Empresa' },
  { text: 'Clientes' },
  { text: 'Atendimento' },
  { text: 'Contato' },
]


export default function Menu({ setChildData, display }){
  const [activeItem, setActiveItem] = useState('');
  const [activeItemPos, setActiveItemPos] = useState(0);
  const [activeItemColor, setActiveItemColor] = useState('');
  const [isInDisplay, setIsInDisplay] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});

  useEffect(() => {
    setIsInDisplay(display);
    if (isInDisplay){
      setMenuStyle({
        paddingBottom: '10px',
      })
    } else {
      setMenuStyle({
        paddingBottom: '150px',
      })
    }
  });
  // console.log(menuStyle)

  const createClickHandler = (activeItem) => e => {
    e.preventDefault();
    setActiveItem(activeItem)
    setActiveItemPos(document.getElementById(activeItem).offsetTop)
    setActiveItemColor(window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('backgound-color'))
    setChildData(activeItem);
  }

  const menuItems = menuItemsOptions.map(item => <MenuItem item={item} createClickHandler= {createClickHandler}/>)

  
  return (
    <div className="menu-container" style={menuStyle}>
      <span className='menu-item--active' style={{top: activeItemPos, backgroundColor: activeItemColor}}/>
      {menuItems}
    </div>
  );
}