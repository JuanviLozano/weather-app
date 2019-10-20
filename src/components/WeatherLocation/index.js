import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN,
    WINDY,
} from './../../constants/Weathers';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '20 m/s',
}

// Esto es un componente
// Intentar reutilizar el componente mas sencillo que pueda ser
// Cuando necesitamos un componente?
//     Cuando necesitamos una de las instancias del ciclo de vida del componente
class WeatherLocation extends Component {

    // Flujo: constructor -> estado inicial -> 1er render -> evento onClick -> setState() -> 2do render

    // Constructor, siempre llamar al super
    // Son los valores inicializados por defecto
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    // Cuando insertamos datos o queremos modificarlos, no tenemos que llamar al this.state, sino al this.setState
    handleUpdateClick = () => {
        console.log("actualizado");
        this.setState({
            data: data2,
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;