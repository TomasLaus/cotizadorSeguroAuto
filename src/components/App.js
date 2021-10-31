import React, { useState } from 'react'
import Formulario from './Formulario';
import Header from './Header';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';



function App() {


  const [input, setInput] = useState({
    resultado:'',
    datos: {},
  })

  const cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos

    //agregar una base de 2000,

    let resultado = 2000;

    //obtener la diferencia de precio sobre el año (diferencia de 3% por año)
    const diferencia = obtenerDiferenciaAnio(year)
    resultado -= ((diferencia * 3) * resultado) / 100
    //americano= 15%, asiato 5% y europeo 30% al valor actual
    resultado = calcularMarca(marca) * resultado

    //plan basico incrementa el valor 20% y el completo un 50%
    let incrementoPlan = obtenerPlan(plan)

    //dependiendo del plan, incrementar: 
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

    //crear objeto para el resumen
    const datosAutos = {
      marca: marca,
      plan: plan,
      year: year,
    }
    setInput({
      resultado: resultado,
      datos: datosAutos,
    })
  }

  return (
    <div className="contenedor">
      <Header titulo={'Cotizador de seguro de automóvil'}/>
      
      <div className="contenedor-formulario">
        <Formulario cotizarSeguro={cotizarSeguro} />
      
        <Resumen datos={input.datos} />

        <Resultado resultado={`${input.resultado}`}/>
      
      </div>

    </div>
  );
}

export default App;
