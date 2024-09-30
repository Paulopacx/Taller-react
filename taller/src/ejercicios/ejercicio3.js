import React from 'react';

const Contenedor = ({ children }) => {
  return (
    <div style={{ border: '3px solid #333', padding: '10px', margin: '10px'}}>
      {children}
    </div>
  );
};
const App = () => {
  return (
    <Contenedor>
      <h1>Título dentro del contenedor</h1>
      <p>Este es un párrafo que está envuelto en el contenedor.</p>
    </Contenedor>
  );
};

export default App;
