import React, {Fragment} from 'react';
import {nivelPresupuesto} from '../Helper';

const ControlGastos = ({presupuesto, sobrante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
              <div className={nivelPresupuesto(presupuesto, sobrante)}>
                Sobrante: ${sobrante}
            </div>
        </Fragment>
     );
}
 
export default ControlGastos;