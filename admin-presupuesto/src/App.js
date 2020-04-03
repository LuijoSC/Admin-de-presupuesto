import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlGastos from './components/ControlGastos';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [sobrante, guardarSobrante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos]= useState([]);
  const [gasto, almacenarGasto] = useState({});
  const [nuevogasto, guardarNuevoGasto]= useState(false);

  useEffect(() => {

    if(nuevogasto){
      guardarGastos([
      ...gastos,
      gasto
    ]);

    const presupuestoSobrante = sobrante - gasto.monto;
    guardarSobrante(presupuestoSobrante);

      guardarNuevoGasto(false);
    }
  }, [gasto, gastos, nuevogasto, sobrante]);

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
            <Formulario
              almacenarGasto={almacenarGasto}
              guardarNuevoGasto={guardarNuevoGasto}
            />
          </div>
          <div className="one-half column">
            <Listado
              gastos={gastos}
            />
            <ControlGastos
              presupuesto={presupuesto}
              sobrante={sobrante}
            />
          </div>
        </div>
        )}    
      </div>
    </header>
  </div>
  );
}

export default App;
