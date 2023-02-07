import React from "react";
import '../estilos/Boton.css';

function Boton(props){

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
      <div 
        onClick={ ()=> props.btnClick(props.children) }
        className={`container-btn ${esOperador(props.children) ? 'operador' : ''} `.trimEnd() }>
        {props.children}
      </div>
  );
}
export default Boton;