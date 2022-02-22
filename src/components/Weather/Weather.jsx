import axios from 'axios';
import React, { useEffect, useState } from 'react';

const lat = '-28.26';
const long = '-52.42';
const apiKey = 'c443d90adbaccc861735ee983716cf7c';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

export const Weather = () => {
    const [weather, setWeather] = useState({
        city: '--',
        state: '--',
        temperature: '--',
    });
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.name);
                setWeather({
                    city: response.data.name,
                    temperature: (response.data.main.temp - 273.15).toFixed(0),
                });
            })
            .catch((e) => {
                throw new Error('Não foi possivel conectar a API!');
            });
    });
    return (
        <div>
            <div></div>
            <div>
                <h2>{weather ? weather.temperature : '--'}</h2>
            </div>
        </div>
    );
};
