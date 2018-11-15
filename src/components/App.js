import React from 'react';
import './../styles/App.css';

import Header from './Header'
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends React.Component {

  state = {
    resultado: '',
    data: {}
  };

  cotizarSeguro = (data) => {
    const {brand, year, plan} = data;
    let resultado = 2000;

    resultado = resultado - ((obtenerDiferenciaAnio(year) * 3) * resultado) / 100;
    resultado = resultado * calcularMarca(brand);
    resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2);

    const infoAuto = {
      brand: brand,
      year: year,
      plan: plan
    };

    this.setState({
      resultado: resultado,
      data: infoAuto
    });
  };

  render() {
    return (
      <div className="contenedor">

        <Header 
          title = "Cotizador de Seguro de Auto"
        />

        <div className="contenedor-formulario">
          <Formulario 
            data = {this.cotizarSeguro}
          />
          <Resumen
            data = {this.state.data}
          />
          <Resultado
            resultado={this.state.resultado}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
