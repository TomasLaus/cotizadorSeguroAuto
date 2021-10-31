import React from "react";


function Formulario (props) {

    const marcaRef = React.createRef();
    const yearRef = React.createRef();
    const planBasicoRef = React.createRef();
    const planCompletoRef = React.createRef();

    

    
    const handleSubmitForm = (e) => {
        //evitar el reload de la pagina
        e.preventDefault();

        //verificar cual es el plan que eligió el usuario
        const plan = planBasicoRef.current.check ? 'basico' : 'completo' 

        //datos a enviar sobre la cotizacion
        const infoAuto = {
            marca: marcaRef.current.value,
            year: yearRef.current.value,
            plan: plan,
        }

        //enviar datos de la cotizacion
        props.cotizarSeguro(infoAuto)
        // resetear el form
        e.currentTarget.reset()
    }

      return (
          <form className="cotizar-auto" onSubmit={handleSubmitForm}>
              <div className="campo">
                  <label>Marca</label>
                <select name="marca" ref={marcaRef} >
                  <option selected disabled>Seleccione</option>
                  <option value="americano">Americano</option>
                  <option value="europeo">Europeo</option>
                  <option value="asiatico">Asiatico</option>
              </select>
              </div>

              <div className="campo">
                  <label>Año</label>
                  <select name="year" ref={yearRef}>
                      <option selected disabled>Seleccione</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                  </select>
              </div>
              <div className="radio-toolbar">
                  <span className="spanPlan" style={{marginRight: '25%', fontWeight: 'bold'}}>Plan:</span>
                  <input className="radioBasico" type="radio" id="radioApple" name="plan" value="basico" ref={planBasicoRef} style={{marginLeft: '150px'}}/> 
                  <label className="radioBasico" for="radioApple">Básico</label>
                  <input className="radioCompleto" type="radio" id="radioBanana" name="plan" value="completo" ref={planCompletoRef} /> 
                  <label className="radioCompleto" for="radioBanana">Completo</label>
              </div>

              <button type="submit" id="radioBanana" className="boton">Cotizar</button>
          </form>
      );
}

export default Formulario