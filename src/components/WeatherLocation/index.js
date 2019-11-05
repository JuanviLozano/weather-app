import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN,
} from './../../constants/Weathers';

// Constantes para traer datos de la web https://home.openweathermap.org
const location = "Murcia,es"
const api_key = "4637ac1baf6432248446c13803cfc33b"
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
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

    getWeatherState = weather_data => {
        return SUN;
    }

    // Nueva funcion para transformar datos
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState =  this.getWeatherState(weather_data);
        
        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    // Cuando insertamos datos o queremos modificarlos, no tenemos que llamar al this.state, sino al this.setState
    handleUpdateClick = () => {
        // Llamamos al fetch con la url
        fetch(api_weather).then( resolve => {
            
            return resolve.json();
        }).then(data => {

            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
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