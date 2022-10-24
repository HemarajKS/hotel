import { useState, useEffect } from 'react';

const Fetch = (place: any) => {
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${
        place && place.results && place.results[0].location.lat
      }&lon=${place && place.results && place.results[0].location.lng}`,
      {
        headers: {
          Accept: 'application/json',
          'user-key': '5ffb698e3d9a8ea8d51fb8847c216058',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setRestaurents(data));
  }, [place]);

  return restaurents;
};

export default Fetch;
