import './body.css';
import Fetch from '../../utils/fetch';
import GeoCode from '../../utils/geoCode';

const Body = (props: any) => {
  // interface Person {
  //   results: any;
  // }
  console.log('search', props.props);

  const place: any = GeoCode(props.props);
  const fetchedData: any = Fetch(place);

  console.log('fetched Data', fetchedData);

  return (
    <div className="body">
      {/* {place
        ? JSON.stringify(place.results[0].location)
        : JSON.stringify({ lat: 13.340905, lng: 74.742119 })} */}
    </div>
  );
};

export default Body;
