import React from 'react';


const Creadores = (props) => {
  console.log(props);
  if(typeof props.creadores === 'undefined') return <div>No encontrado</div>

  const {name, role} = props.creadores;


  return(
    <li>{name} <span className="red-text">{role}</span></li>
  )
}

export default Creadores;