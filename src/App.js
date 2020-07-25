import React from 'react';
import './App.css';
import Contador from './contador/mostrar/mostrar';
import BtnIncrementar from './contador/btnIncrementar/incrementar';
import BtnDecrementar from './contador/btnDecrementar/decrementar';
import InputValor from './contador/inputValor/valor';


function App() {
   return (
    <div>
      <div className="titulo">
        <h1>Redux con Hooks</h1>
        <blockquote>Contador con incremento dado por el usuario</blockquote>
      </div>
      <Contador />
      <div className="comandos">
        <BtnDecrementar />
        <InputValor />      
        <BtnIncrementar />
      </div>

    </div>
  );
}

export default App;
