import { FC } from 'react';
import ForecastItem from './ForecastItem';
import { WeatherForecast } from '../../store/types';
import { ForcastContainer } from './styles';

interface ForecastProps {
  data: WeatherForecast;
}

const Forecast: FC<ForecastProps> = ({ data }) => (
  <ForcastContainer>
    {data.daily.slice(0, 5).map((dailyForecast) => (
      <ForecastItem key={dailyForecast.dt} data={dailyForecast} />
    ))}
  </ForcastContainer>
);

export default Forecast;
