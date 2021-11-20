import React from "react";
import { useState, useEffect } from "react"
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const Countries = ({ handleCountryChange }) => {
    const [name, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);
  
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Selecione o pais !
          </option>
          {name.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
  };
  
  export default Countries;