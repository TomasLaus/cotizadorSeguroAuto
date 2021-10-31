import React from "react";
import {primeraMayuscula} from '../helper'

function Resumen (props) {


    const mostrarResumen = () => {
        const {marca, year, plan} = props.datos

        if (!marca || !year || !plan) return null

        return (
            <div className='resumen'>
                <h2>Resumen de cotizacion</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año: {primeraMayuscula(year)}</li>
            </div>
        )
    }
    return (
        <div>
            {mostrarResumen()}
        </div>
    )
}

export default Resumen