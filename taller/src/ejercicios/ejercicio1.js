import React from 'react';
import ReactDOM from 'react-dom';


const Saludo = (props) => {
  return (
    <div>
      <h3>¡Hola, {props.nombre}!</h3>
      <p>Bienvenido a mi taller, soy Paulo.</p>
    </div>
  );
};
  
export default Saludo;
  
ReactDOM.render(
  <div>
    <Saludo nombre="Profe"/>
  </div>,
document.getElementById('root')
);