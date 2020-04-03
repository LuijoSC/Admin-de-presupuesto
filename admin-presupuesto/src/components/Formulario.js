import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({almacenarGasto, guardarNuevoGasto}) => {

    const [concepto, guardarConcepto]= useState('');
    const [monto, guardarMonto]= useState(0);
    const [error, guardarError]= useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if(monto < 1 || isNaN(monto) || parseInt(monto) === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        const gasto = {
            concepto,
            monto,
            id: shortid.generate()
        }
        almacenarGasto(gasto);
        guardarNuevoGasto(true);

        guardarConcepto('');
        guardarMonto(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Añade tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios y la
            cantidad debe ser un número entero"/> : null}
            <div className="campo">
                <label>Concepto gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Comida"
                    value={concepto}
                    onChange={e => guardarConcepto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="500"
                    value={monto}
                    onChange={e => guardarMonto(parseInt(e.target.value,10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Añadir gasto"
            />
        </form>
     );
}
 
export default Formulario;