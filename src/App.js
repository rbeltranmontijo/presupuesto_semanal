import React, { useState, useEffect } from "react";

import Preguta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, guardarpreguntaPresupuesto] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  useEffect(() => {
    const listadoGastos = [...gastos, gasto];
    guardarGastos(listadoGastos);
  }, []);

  return (
    <div className="App container">
      <h1>Gasto Semanl</h1>
      <div className="contenido-principal contenido">
        {preguntaPresupuesto ? (
          <Preguta
            guardarPresupuesto={guardarPresupuesto}
            guardarpreguntaPresupuesto={guardarpreguntaPresupuesto}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario guardarGasto={guardarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
