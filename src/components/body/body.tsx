import './body.css';
import Maps from '../Map/map';

const Body = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div className="body">
      <Maps />
    </div>
  );
};

export default Body;
