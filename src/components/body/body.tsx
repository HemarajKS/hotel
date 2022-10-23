import './body.css';
import Fetch from '../../utils/fetch';
import GeoCode from '../../utils/geoCode';

const Body = (props: any) => {
  console.log('search', props.props);
  console.log('fetched data', Fetch());
  console.log('geocode', GeoCode(props.props));

  return <div className="body">Data</div>;
};

export default Body;
