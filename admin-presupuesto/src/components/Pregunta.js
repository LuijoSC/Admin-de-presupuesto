import React, {Fragment, useState} from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarSobrante}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
            if(cantidad<1 || isNaN(cantidad)){
                guardarError(true);
                return;
            }
            guardarError(false);
            guardarPresupuesto(cantidad);
            guardarSobrante(cantidad);
    }

    return ( 
        <Fragment>
            <h2>¿Cuánto es tu presupuesto?</h2>
            { error ? <Error mensaje="La cantidad es incorrecta" /> : null}
                <form
                    onSubmit={agregarPresupuesto}
                >
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Coloca tu presupuesto"
                        onChange={definirPresupuesto}
                    />

                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Definir presupuesto"
                    />
                </form>
        </Fragment>
     );
}
 
export default Pregunta;