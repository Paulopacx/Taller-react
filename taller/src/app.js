import React, { useState } from 'react';
import Ejercicio1 from './ejercicios/ejercicio1';
import Ejercicio2 from './ejercicios/ejercicio2';
import Ejercicio3 from './ejercicios/ejercicio3';
import Ejercicio4 from './ejercicios/ejercicio4';
const App = () => {
  const [ejercicio, mostrarejercicio] = useState(null);
  const mostrarEjercicio = () => {
    switch (ejercicio) {
      case 'Ejercicio1':
        return <Ejercicio1 />;
      case 'Ejercicio2':
        return <Ejercicio2 />;
      case 'Ejercicio3':
        return <Ejercicio3 />;
    case 'Ejercicio4':
        return <Ejercicio4 />;
    default:
        return <Ejercicio1 />;
    }
  };
  return (
    <div>
      <h1 style={{color: "red", display:'flex',justifyContent: 'center'}}>Problemas</h1>
      <nav style={{display:'flex',justifyContent: 'center', gap:30}}>
        <button style={{backgroundColor:"#999", border:0}} onClick={() => mostrarejercicio('Ejercicio1')}>Ejercicio 1</button>
        <button style={{backgroundColor:"#999", border:0}} onClick={() => mostrarejercicio('Ejercicio2')}>Ejercicio 2</button>
        <button style={{backgroundColor:"#999", border:0}} onClick={() => mostrarejercicio('Ejercicio3')}>Ejercicio 3</button>
        <button style={{backgroundColor:"#999", border:0}} onClick={() => mostrarejercicio('Ejercicio4')}>Ejercicio 4</button>
      </nav>
      <div>
        {mostrarEjercicio()}{}
      </div>
    </div>
  );
};
export default App;