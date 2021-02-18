import React from 'react';

export default function MenuItem({createClickHandler, item}){
  const clickHandler = createClickHandler(item.text)

  return(
    <div
      className='menu-item'
      id={ item.text }
      onClick={ clickHandler }
    >
      { item.text.toUpperCase() }
    </div>
  )
}