import { useState, useEffect } from 'react';

const Fetch = () => {
  const [restaurents, setRestaurents] = useState([]);
  useEffect(() => {
    fetch(
      'https://developers.zomato.com/api/v2.1/geocode?lat=12.9716&lon=77.5946',
      {
        headers: {
          Accept: 'application/json',
          'user-key': '5ffb698e3d9a8ea8d51fb8847c216058',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setRestaurents(data));
  }, []);

  return restaurents;
};

export default Fetch;
