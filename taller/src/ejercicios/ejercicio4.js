import React, { useState } from 'react';

const Contador = () => {
const [contador, numero] = useState(0);

return (
<div>
    <h1>Contador: {contador}</h1>
    <button onClick={() => numero(contador + 1)}>+1</button>
    <button onClick={() => numero(contador - 1)}>-1</button>
</div>
);
};

export default Contador;