import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from './components/Search';
import { getWeather } from './store/actions/currentWeatherActions';
import { Layout } from './styles';

const App: FC = () => {
  const dispatch = useDispatch();

  const onSearch = (city: string) => {
    dispatch(getWeather(city));
  };

  return (
    <Layout>
      <Search placeholderText="Enter city name..." onSearch={onSearch} />
    </Layout>
  );
};

export default App;
