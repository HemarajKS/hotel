import './body.css';
import Fetch from '../../utils/fetch';
import GeoCode from '../../utils/geoCode';

const Body = (props: any) => {
  console.log('search', props.props);
  console.log('fetched data', Fetch());

  const place = GeoCode(props.props);

  console.log('geocode', place.results);

  return <div className="body">Data</div>;
};

export default Body;
