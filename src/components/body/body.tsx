import './body.css';
import Fetch from '../../utils/fetch';
import GeoCode from '../../utils/geoCode';

const Body = (props: any) => {
  const place: any = GeoCode(props.props);
  const fetchedData: any = Fetch(place);

  console.log(
    'fetched Data',
    fetchedData && fetchedData.location && fetchedData.nearby_restaurants
  );

  return (
    <div className="body">
      {fetchedData && fetchedData.location ? (
        <div className="searchResults">
          {fetchedData.nearby_restaurants.map((ele: any, i: any) => (
            <div className="sesrchItems" key={i}>
              {ele.restaurant.name}
            </div>
          ))}
        </div>
      ) : (
        JSON.stringify(fetchedData.message)
      )}
    </div>
  );
};

export default Body;
