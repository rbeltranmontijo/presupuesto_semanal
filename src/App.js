import React, { useState, useEffect } from "react";

import Preguta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarpreguntaPresupuesto] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);
      // restar presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
      // Una vez se agrega lo ponemos como false
      guardarCrearGasto(false);
    }
  }, [crearGasto, gasto, gastos, restante]);

  return (
    <div className="App container">
      <h1>Gasto Semanl</h1>
      <div className="contenido-principal contenido">
        {preguntaPresupuesto ? (
          <Preguta
            guardarPresupuesto={guardarPresupuesto}
            guardarpreguntaPresupuesto={guardarpreguntaPresupuesto}
            guardarRestante={guardarRestante}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
