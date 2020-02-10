import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Preguntas = ({ guardarPresupuesto, guardarRestantes, actualizarPregunta }) => {
  // definir state
  const [cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false);

  // funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(+e.target.value);
  };

  // submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar , lo que da error
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // si se pasa la validacion lo que no da error
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestantes(cantidad);
    actualizarPregunta(false);
  };

  return (

    <>

      <h2>¡Coloca Aqui Tu Presupuesto!</h2>

      {error ? <Error mensaje="El Valor No Es Posible" /> : null }

      <form onSubmit={agregarPresupuesto}>

        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />


      </form>

    </>


  );
};

Preguntas.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestantes: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Preguntas;
