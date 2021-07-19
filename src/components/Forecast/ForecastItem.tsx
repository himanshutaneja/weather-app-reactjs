import { FC } from 'react';
import moment from 'moment';
import { ForecastDaily } from '../../store/types';
import { formatTemperature } from '../../helpers';
import {
  ForcastItemContainer,
  Day,
  TempMax,
  TempMin,
  WeatherIcon,
  Rain,
} from './styles';

interface ForecastItemProps {
  data: ForecastDaily;
}

const ForecastItem: FC<ForecastItemProps> = ({ data }) => {
  return (
    <ForcastItemContainer>
      <Day>{moment.unix(data.dt).format('ddd DD')}</Day>
      <TempMax>{formatTemperature(data.temp.max)}°</TempMax>
      <TempMin>{formatTemperature(data.temp.min)}°</TempMin>
      <WeatherIcon className={`wi wi-owm-${data.weather[0].id}`}></WeatherIcon>
      {data.rain && <Rain>{data.rain}%</Rain>}
    </ForcastItemContainer>
  );
};

export default ForecastItem;
