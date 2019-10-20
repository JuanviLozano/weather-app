import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/Weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const sizeIcon = "4x";

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else 
        return <WeatherIcons className="wicon" name={"day-sunny"} size="2x" />
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature"> {`${temperature}`}</span>
        <span className="temperatureType"> {` Cº`}</span>
    </div>
);

// Validacion por consola, asignamos la variable y le decimos el tipo de variable que es
// tambien podemos decirle si es requerida o no con isRequired
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;