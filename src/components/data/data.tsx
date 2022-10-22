const Data = () => {
  const data = fetch(
    'https://developers.zomato.com/api/v2.1/geocode?lat=13.3409&lon=74.7421',
    {
      headers: {
        Accept: 'application/json',
        'user-key': '5ffb698e3d9a8ea8d51fb8847c216058',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  console.log(data);
  return <div>Data</div>;
};

export default Data;
