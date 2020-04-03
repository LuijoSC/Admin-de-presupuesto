import React from 'react';

const Gasto = ({gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.concepto}
            <span className="gasto">${gasto.monto}</span>
        </p>
    </li>
 );
 
export default Gasto;