import React from "react";

function Gasto({ gasto }) {
  return (
    <li className="gastos">
      <p>
        {gasto.nombreGasto}
        <span className="gasto">${gasto.cantidadGasto}</span>
      </p>
    </li>
  );
}

export default Gasto;
