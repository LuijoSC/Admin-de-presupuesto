import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [sobrante, guardarSobrante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  return (
  <div className="container">
    <header>
      <h1>Gastos de la semana</h1>
      <div className="contenido-principal contenido">
        {mostrarpregunta ? 
        (
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarSobrante={guardarSobrante}
            actualizarPregunta={actualizarPregunta}
          />
        ) : (
          <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
        )}    
      </div>
    </header>
  </div>
  );
}

export default App;
