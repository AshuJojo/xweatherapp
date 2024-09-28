import { useState } from "react";

const WeatherInfo = () => {
    const API_KEY = '2f13a009ad0e4676bd2163426242809';
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState(null);

    const fetchWeatherInfo = async (city) => {
        try {
            setError('');
            setIsLoading(true);

            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)

            const resJSON = await res.json();

            setIsLoading(false)

            console.log('resJSON', resJSON);

            return resJSON;
        } catch (e) {
            console.error('e', e);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city)
            return;

        const data = await fetchWeatherInfo(city);

        if (data.error) {
            setWeatherInfo(null)
            setError(data.error.message);
            return
        }

        setWeatherInfo(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} />
                <button type="submit">Submit</button>
            </form>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading data...</p>}

            {weatherInfo &&
                <div>
                    <div>
                        <h2>Temperature</h2>
                        <p>{weatherInfo.current.temp_c}°C</p>
                    </div>
                    <div>
                        <h2>Humidity</h2>
                        <p>{weatherInfo.current.condition.text}</p>
                    </div>
                    <div>
                        <h2>Condition</h2>
                        <p>{weatherInfo.current.temp_c}°C</p>
                    </div>
                    <div>
                        <h2>Wind Speed</h2>
                        <p>{weatherInfo.current.wind_kph} kph</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default WeatherInfo