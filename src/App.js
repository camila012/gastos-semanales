import React, { useState, useEffect } from 'react';
import Preguntas from './Componentes/Preguntas';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';
import ControlPresupuesto from './Componentes/ControlPresupuesto';


function App() {
  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestantes] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);


  // useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      // agregar el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto,
      ]);

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestantes(presupuestoRestante);

      // resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);


  return (
    <div className="container">
      <header>
        <h1>MIS GASTOS SEMANALES</h1>

        <div className="contenido-principal contenido">

          { mostrarpregunta
            ? (
              <Preguntas
                guardarPresupuesto={(value) => { guardarPresupuesto(value); }}
                guardarRestantes={(value) => { guardarRestantes(value); }}
                actualizarPregunta={(value) => { actualizarPregunta(value); }}
              />
            )

            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />

                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />

                </div>
              </div>

            )}


        </div>


      </header>
    </div>
  );
}
export default App;
