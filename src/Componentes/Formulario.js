import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);


  const agregarGastos = (e) => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
    } else {
      guardarError(false);
    }

    // crear gastos
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),


    };

    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // resetear el form
    guardarNombre('');
    guardarCantidad(0);
  };

  const setCantidad = (prop) => {
    console.log('prop:', prop);
    guardarCantidad(prop);
  };

  return (

    <form onSubmit={agregarGastos}>


      <h2>Agregar Gastos</h2>

      {error ? <Error mensaje="Ambos Campos Son Obligatorios" /> : null }

      <div className="campo">
        <label>¿Nombre Del Gasto?</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="EJ.Morral"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />

      </div>

      <div className="campo">
        <label>¿Cantidad De Gasto?</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="EJ.$20.000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />

      </div>
      <input
        className="campo"
        type="submit"
        value="Enviar"
        onClick={agregarGastos}
      />

    </form>


  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
