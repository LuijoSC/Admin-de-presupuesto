import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
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
ControlGastos.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    sobrante: PropTypes.number.isRequired
}
 
export default ControlGastos;