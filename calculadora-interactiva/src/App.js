import React,{useState} from 'react'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonLimpiar from './components/Boton-limpiar';
import {evaluate} from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const addInput = (val) =>{
    setInput(input + val)
  } 
  const calcularRes = () => {
    if(input){
      setInput(evaluate(input))
    }else{
      setInput(0)
    }
  }

  return (
    <div className="App">
      <div className='containerCalculator'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton btnClick={addInput}>1</Boton>
          <Boton btnClick={addInput}>2</Boton>
          <Boton btnClick={addInput}>3</Boton>
          <Boton btnClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton btnClick={addInput}>4</Boton>
          <Boton btnClick={addInput}>5</Boton>
          <Boton btnClick={addInput}>6</Boton>
          <Boton btnClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton btnClick={addInput}>7</Boton>
          <Boton btnClick={addInput}>8</Boton>
          <Boton btnClick={addInput}>9</Boton>
          <Boton btnClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton btnClick={calcularRes}>=</Boton>
          <Boton btnClick={addInput}>0</Boton>
          <Boton btnClick={addInput}>.</Boton>
          <Boton btnClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonLimpiar btnClear={()=> setInput('')} >Clear</BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;
