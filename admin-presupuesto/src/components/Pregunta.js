import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarSobrante, actualizarPregunta}) => {

    const [monto, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
            if(monto<1 || isNaN(monto)){
                guardarError(true);
                return;
            }
            guardarError(false);
            guardarPresupuesto(monto);
            guardarSobrante(monto);
            actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>¿Cuánto es tu presupuesto?</h2>
            { error ? <Error mensaje="El monto es incorrecto" /> : null}
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

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarSobrante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;