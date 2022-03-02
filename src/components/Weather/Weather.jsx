import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    IconContainer,
    LocaleContainer,
    LocaleSpan,
    WeatherLocaleContainer,
    WeatherHeading,
    WeatherContainer,
} from './Weather.style';
import Cloud from '../../assets/icons/cloud.svg';

const lat = '-28.26';
const long = '-52.42';
const apiKey = '4bee642f8c86df52bd2410efe3ad17b7';
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
const UF = 43;
const urlState = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`;

export const Weather = () => {
    const [weather, setWeather] = useState({
        city: '--',
        state: '--',
        temperature: '--',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            axios.all([axios.get(urlWeather), axios.get(urlState)]).then(
                axios.spread((weather, state) => {
                    setWeather({
                        city: weather.data.name,
                        state: state.data.sigla,
                        temperature: (weather.data.main.temp).toFixed(0),
                    });
                })
            );
        }, 10000);
        return () => clearInterval(timer);
    });
    return (
            <WeatherLocaleContainer>
                <LocaleContainer>
                    <LocaleSpan>
                        {weather.city} - {weather.state}{' '}
                    </LocaleSpan>
                </LocaleContainer>

                <WeatherContainer>
                    <IconContainer>
                        <img src={Cloud} alt='Cloud icon' />
                    </IconContainer>
                    <WeatherHeading>
                        {weather ? weather.temperature : '--'}º
                    </WeatherHeading>
                </WeatherContainer>
            </WeatherLocaleContainer>
    );
};
