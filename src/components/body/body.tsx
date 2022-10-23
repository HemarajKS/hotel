import './body.css';
import Fetch from '../../utils/fetch';
import GeoCode from '../../utils/geoCode';

const Body = (props: any) => {
  // interface Person {
  //   results: any;
  // }
  console.log('search', props.props);
  console.log('fetched data', Fetch());

  const place: any = GeoCode(props.props);
  console.log('====================================');
  console.log(place);
  console.log('====================================');

  return (
    <div className="body">
      {place
        ? JSON.stringify(place.results[0].location)
        : JSON.stringify({ lat: 13.340905, lng: 74.742119 })}
    </div>
  );
};

export default Body;
