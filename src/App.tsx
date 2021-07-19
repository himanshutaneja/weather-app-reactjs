import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from './components/Search';
import { CurrentWeather } from './components/CurrentWeather';
import { getWeather } from './store/actions/currentWeatherActions';
import { Layout, ContentWrapper } from './styles';
import { RootState } from './store';

const App: FC = () => {
  const dispatch = useDispatch();
  const { data: currentWeather } = useSelector(
    (state: RootState) => state.currentWeather,
  );

  const onSearch = (city: string) => {
    dispatch(getWeather(city));
  };

  return (
    <Layout>
      <Search placeholderText="Enter city name..." onSearch={onSearch} />
      <ContentWrapper>
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </ContentWrapper>
    </Layout>
  );
};

export default App;
