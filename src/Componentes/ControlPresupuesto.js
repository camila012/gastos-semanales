import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => (

  <>
    <div className="alert alert-primary">
    presupuesto: $
      {' '}
      {presupuesto}
    </div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
        restante: $
      {' '}
      {restante}

    </div>

  </>
);

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
