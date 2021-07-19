import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from './components/Search';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { Error } from './components/Error';
import { getWeather } from './store/actions/currentWeatherActions';
import { Layout, ContentWrapper } from './styles';
import { RootState } from './store';

const App: FC = () => {
  const dispatch = useDispatch();
  const { data: currentWeather, error: currentWeatherError } = useSelector(
    (state: RootState) => state.currentWeather,
  );

  const { data: forecast, error: weatherForecastError } = useSelector(
    (state: RootState) => state.weatherForecast,
  );

  const onSearch = (city: string) => {
    dispatch(getWeather(city));
  };

  return (
    <Layout>
      <Search placeholderText="Enter city name..." onSearch={onSearch} />
      {currentWeatherError || weatherForecastError ? (
        <Error
          message={
            currentWeatherError ? currentWeatherError : weatherForecastError
          }
        />
      ) : (
        <ContentWrapper>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </ContentWrapper>
      )}
    </Layout>
  );
};

export default App;
