import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchAll } from "../../api";


const All = ({ handleCountryChange }) => {
    const [all, setAll] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setAll(await fetchAll());
      };  
      fetchAPI();
    }, []);
  
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Selecione o pais
          </option>
          {all.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
  };
  
  export default All;