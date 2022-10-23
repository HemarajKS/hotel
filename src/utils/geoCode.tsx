import { useEffect, useState } from 'react';

const GeoCode = (search: any) => {
  const [location, setLocataion] = useState('');
  console.log('S', search);

  const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${
    search || 'udupi'
  }&language=en`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '40adfff86amshae63704e562067ap186c63jsnff5b3c3286a4',
      'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setLocataion(json))
      .catch((err) => console.error('error:' + err));
  }, [search]);

  return location;
};

export default GeoCode;
