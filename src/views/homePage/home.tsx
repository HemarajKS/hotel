import Body from '../../components/body/body';
import Navbar from '../../components/navBar/navBar';
import { useState } from 'react';
const Home = () => {
  const [search, setSearch] = useState('');
  const onSearchHome = (data: any) => {
    setSearch(data);
  };

  return (
    <div>
      <Navbar onSearchHome={onSearchHome} />
      <Body props={search} />
    </div>
  );
};

export default Home;
