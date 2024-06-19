import {useEffect, useState} from 'react'
import * as styles from './Countries..module.css'


function App() {
    const [countries, setCountries] = useState([])

    const fetchDate = async () => {
        const url = 'https://restcountries.com/v3.1/all';
        const res = await fetch(url).then(res => {
            return res.json()
        })
        setCountries(res);
        console.log('res = ', res);
    }

    useEffect(() => {
        fetchDate();
    }, []);


    return (
        <>
            <div className={styles.countries}>
                {countries.map((country: any) => {
                    return (
                        <div key={country.cca3} className={styles.country}>
                            <h1>{country.name.common}</h1>
                            <img src={country.flags.png} alt={country.name.common}/>
                            <a href={`https://en.wikipedia.org/wiki/${country.name.common}`} target="_blank">Wikipedia</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
