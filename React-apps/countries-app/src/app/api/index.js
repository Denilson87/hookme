import axios from 'axios';

const url = 'https://restcountries.com/v2/';
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/all/${country}`;
  }

  try {
    const { data: { name } } = await axios.get(changeableUrl);

    return { name };
  } catch (error) {
    return error;
  }
};

export const fetchAll = async () => {
  try {
    const { data: { all } } = await axios.get(`${url}/all`);

    return all.map((country) => country.name);
    
  } catch (error) {
    return error;
  }
  
};