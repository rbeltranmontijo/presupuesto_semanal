import React, { useState } from "react";

import shortid from "shortid";

import Error from "./Error";

function Formulario(props) {
  const { guardarGasto } = props;
  // State
  const [nombreGasto, guardarNombreGasto] = useState("");
  const [cantidadGasto, guardarCantidadGasto] = useState();
  const [error, guardarError] = useState(false);

  // Cuando se agrega el gasto
  const agregarGasto = e => {
    e.preventDefault();

    //Validar
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === "") {
      guardarError(true);
      return;
    }

    // Construir objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    };

    //Pasar a componente principal
    guardarGasto(gasto);
    guardarError(false);

    //Resetear el form
    guardarCantidadGasto("");
    guardarNombreGasto("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos aquí</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        {error ? (
          <Error mensaje="El presupuesto es incorrecto o presupuesto incorrecto" />
        ) : null}

        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
}

export default Formulario;
