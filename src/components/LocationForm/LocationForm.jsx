import styles from './LocationForm.module.css';

const LocationForm = ({ city, setCity, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input className={styles.input} type="text" value={city} onChange={(e) => { setCity(e.target.value) }} />
            <button className={styles.button} type="submit">Search</button>
        </form>
    )
}

export default LocationForm