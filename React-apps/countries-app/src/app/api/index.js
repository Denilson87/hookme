import axios from 'axios';

const url = 'https://restcountries.com/v2/all';

export const fetchCountries = async () => {
    try {
      const { data: { all } } = await axios.get(`${url}/all`);
  
      return all.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
