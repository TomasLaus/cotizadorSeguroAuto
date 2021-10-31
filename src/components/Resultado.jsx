import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group"

function Resultado (props) {
    
    const resultado = props.resultado;
    const mensaje = (!resultado) ? 'Elige las opciones para tu seguro' : 'El total es: $';

    return (
        <div className="gran-total">
            <TransitionGroup component="span" className="resultado">
                {mensaje}
                <CSSTransition classNames="resultado" key={resultado} timeout={{enter:500, exit:500}}>
                    <span>{resultado}</span>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}


export default Resultado;