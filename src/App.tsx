import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from './components/Search';
import { getWeather } from './store/actions/currentWeatherActions';

const App: FC = () => {
  const dispatch = useDispatch();

  const onSearch = (city: string) => {
    dispatch(getWeather(city));
  };

  return (
    <div>
      <Search placeholderText="Enter city name..." onSearch={onSearch} />
    </div>
  );
};

export default App;
