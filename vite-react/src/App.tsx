import {useEffect, useState} from 'react'
import * as styles from './Countries.module.css'
import {useDebounce} from "use-debounce";


function App() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('');
    const [searchDebounced] = useDebounce(search, 600);


    const fetchDate = async (search = '') => {
        let url;
        if (search) {
            url = `https://restcountries.com/v3.1/name/${search}`;
        } else {
            url = 'https://restcountries.com/v3.1/all';
        }

        const res = await fetch(url).then(res => {
            return res.json()
        })
        console.log('res = ', res);

        if (res.status === 404) {
            setCountries([]);
            return;
        }

        setCountries(res);
    }

    useEffect(() => {
        console.log('z');
        fetchDate(search);
    }, [searchDebounced]);


    return (
        <>
            <div>
                <input type="text" placeholder="Search for country" onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {countries.length === 0 && <h1>No countries found</h1>}
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
