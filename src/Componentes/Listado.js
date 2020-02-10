import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const Listado = ({ gastos }) => (

  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto
        gasto={gasto}
        key={gasto.id}
      />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
