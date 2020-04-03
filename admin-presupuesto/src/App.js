import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

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
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </header>
  </div>
  );
}

export default App;
