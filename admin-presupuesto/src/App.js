import React, {useState} from 'react';
import Pregunta from './components/Pregunta';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [sobrante, guardarSobrante] = useState(0);

  return (
  <div className="container">
    <header>
      <h1>Gastos de la semana</h1>
      <div className="contenido-principal contenido">
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarSobrante={guardarSobrante}
        />
      </div>
    </header>
  </div>
  );
}

export default App;
