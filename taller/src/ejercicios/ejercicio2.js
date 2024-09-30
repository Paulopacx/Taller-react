import React from 'react';

const Saludo = (props) => {
  const obtenerSaludo = (idioma) => {
    switch (idioma) {
      case 'es':
        return `Hola ${props.nombre}`;
      case 'en':
        return `Hello ${props.nombre}`;
      default:
        return `Hola ${props.nombre}`;
    }
  };

  return (
    <div>
      <h4 style={{display:'flex' , justifyContent: 'center'}}>{obtenerSaludo(props.idioma)}</h4>
    </div>
  );
};

const Ejercicio2 = () => {
  return (
    <div>
      <Saludo nombre="Yari 💫" idioma="es" />
      <Saludo nombre="Yari 💫" idioma="en" /> 
    </div>
  );
};

export default Ejercicio2;