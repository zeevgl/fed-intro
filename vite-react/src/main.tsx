import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//TODO: create list of countries with hook and fetch:
//https://restcountries.com/v3.1/all
//https://restcountries.com/#endpoints-all
//https://github.com/ShantanuSutar/REST-Countries-API/tree/main