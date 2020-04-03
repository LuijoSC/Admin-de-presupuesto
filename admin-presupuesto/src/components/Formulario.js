import React, {useState} from 'react';
const Formulario = () => {
    return ( 
        <form>
            <h2>Añade tus gastos aquí</h2>
            <div className="campo">
                <label>Concepto gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Comida"
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="500"
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