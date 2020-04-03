import React, {Fragment} from 'react';

const ControlGastos = ({presupuesto, sobrante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
              <div className="alert ">
                Sobrante: ${sobrante}
            </div>
        </Fragment>
     );
}
 
export default ControlGastos;