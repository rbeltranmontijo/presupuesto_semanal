import React, { useState } from "react";

import Error from "./Error";

function Pregunta(props) {
  const {
    guardarPresupuesto,
    guardarpreguntaPresupuesto,
    guardarRestante
  } = props;

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Validar presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // Si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarpreguntaPresupuesto(false);
  };

  return (
    <React.Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? (
        <Error mensaje="El presupuesto es incorrecto o presupuesto incorrecto" />
      ) : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </React.Fragment>
  );
}

export default Pregunta;
