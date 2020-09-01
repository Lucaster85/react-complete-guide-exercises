import React from 'react';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="ejercicio">
        <Ejercicio1 />
      </div>
      <div className="ejercicio">
        <Ejercicio2 />
      </div>
    </div>
  )
}

export default App;
