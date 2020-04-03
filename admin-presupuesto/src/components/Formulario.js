import React, {useState} from 'react';
const Formulario = () => {

    const [concepto, guardarConcepto]= useState('');
    const [monto, guardarMonto]= useState(0);

    const agregarGasto = e => {
        e.preventDefault();
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Añade tus gastos aquí</h2>
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
                    onChange={e => guardarMonto(parseInt(e.target.value, 10))}
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