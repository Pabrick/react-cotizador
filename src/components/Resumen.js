import React from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends React.Component {

    mostrarResumen = ({brand, year, plan}) => {
        if(brand && year && plan) {
            return (
                <div className="resumen">
                    <h2>Resumen de Cotización</h2>
                    <ul>
                        <li>Marca: {primeraMayuscula(brand)}</li>
                        <li>Plan: {primeraMayuscula(plan)}</li>
                        <li>Año del auto: {year}</li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.mostrarResumen(this.props.data)}
            </div>
        );
    }
}

export default Resumen;