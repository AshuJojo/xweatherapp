import { useState } from "react";
import styles from './WeatherInfo.module.css';
import LocationForm from "../LocationForm/LocationForm";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const WeatherInfo = () => {
    const API_KEY = '2f13a009ad0e4676bd2163426242809';
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState(null);

    const fetchWeatherInfo = async (city) => {
        try {
            setIsLoading(true);

            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)

            const resJSON = await res.json();

            setIsLoading(false);

            if (resJSON.error) {
                alert('Failed to fetch weather data');
                return null;
            }
            return resJSON;
        } catch (e) {
            console.error('e', e);
            alert('Failed to fetch weather data');
            return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city)
            return;

        const data = await fetchWeatherInfo(city);

        setWeatherInfo(data);
    }

    return (
        <div className={styles.container}>
            <LocationForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
            {isLoading && <p>Loading data...</p>}
            {!isLoading && weatherInfo && <WeatherDetails weatherInfo={weatherInfo} />}
        </div>
    )
}

export default WeatherInfo