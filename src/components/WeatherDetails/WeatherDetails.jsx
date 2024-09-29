import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ weatherInfo }) => {
    return (
        <div className={`${styles.weatherCards} weather-cards`}>
            <div className={`${styles.weatherCard} weather-card`}>
                <h2>Temperature</h2>
                <p>{weatherInfo.current.temp_c}°C</p>
            </div>
            <div className={`${styles.weatherCard} weather-card`}>
                <h2>Humidity</h2>
                <p>{weatherInfo.current.humidity}%</p>
            </div>
            <div className={`${styles.weatherCard} weather-card`}>
                <h2>Condition</h2>
                <p>{weatherInfo.current.condition.text}</p>
            </div>
            <div className={`${styles.weatherCard} weather-card`}>
                <h2>Wind Speed</h2>
                <p>{weatherInfo.current.wind_kph} kph</p>
            </div>
        </div>
    )
}

export default WeatherDetails