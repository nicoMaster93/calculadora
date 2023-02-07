import React from 'react'
import '../estilos/Boton-limpiar.css'

const BotonLimpiar = (props) => {
  return (
    <div className='btn-clean' onClick={ props.btnClear } >
        {props.children}
    </div>
  )
}

export default BotonLimpiar