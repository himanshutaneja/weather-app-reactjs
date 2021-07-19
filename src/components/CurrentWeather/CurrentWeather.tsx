import { FC } from 'react';
import moment from 'moment';
import { CurrentWeather as CurrentWeatherData } from '../../store/types';
import { formatTemperature } from '../../helpers';
import {
  CurrentWeatherContainer,
  Header,
  Location,
  Time,
  Detail,
  Temperature,
  Phrase,
  WeatherIcon,
  TemperatureHighLow,
} from './styles';

interface CurrentWeatherProps {
  data: CurrentWeatherData;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <CurrentWeatherContainer>
      <Header>
        <Location>
          {data.name} - {data.sys.country} Weather
        </Location>
        <Time>As of {moment.unix(data.dt).format('hh:mm A')}</Time>
      </Header>
      <Detail>
        <div>
          <Temperature>{formatTemperature(data.main.temp)}°</Temperature>
          <Phrase>{data.weather[0].description}</Phrase>
        </div>
        <div>
          <WeatherIcon
            className={`wi wi-owm-${data.weather[0].id}`}
          ></WeatherIcon>
          <TemperatureHighLow>
            {formatTemperature(data.main.temp_max)}°/
            {formatTemperature(data.main.temp_min)}°
          </TemperatureHighLow>
        </div>
      </Detail>
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
