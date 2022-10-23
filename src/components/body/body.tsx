import './body.css';
import Fetch from '../../utils/fetch';

const Body = (props: any) => {
  console.log('first', props.props);
  console.log('fetched data', Fetch());

  return <div className="body">Data</div>;
};

export default Body;
