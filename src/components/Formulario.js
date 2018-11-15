import React from 'react';

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        this.refBrand = React.createRef();
        this.refYear = React.createRef();
        this.refRadioBasic = React.createRef();
        this.refRadioComplete = React.createRef();
    }

    cotizarSeguro = (e) => {
        e.preventDefault();

        const infoAuto = {
            brand: this.refBrand.current.value,
            year: this.refYear.current.value,
            plan: this.refRadioBasic.current.checked ? this.refRadioBasic.current.value : this.refRadioComplete.current.value
        };

        this.props.data(infoAuto);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.refBrand}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.refYear}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input
                        type="radio"
                        name="plan"
                        value="basico"
                        defaultChecked={true}
                        ref={this.refRadioBasic} /> Básico
                     <input
                        type="radio"
                        name="plan"
                        value="completo"
                        ref={this.refRadioComplete} /> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;