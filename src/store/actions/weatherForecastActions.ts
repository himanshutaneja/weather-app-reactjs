import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherForecastAction } from '../types';
import {
  WEATHER_FORECAST_REQUESTED,
  WEATHER_FORECAST_SUCCEEDED,
  WEATHER_FORECAST_FAILED,
} from '../actionTypes';
import { invokeAPI } from '../../helpers';
import { URLS } from '../../constants';

export const getWeatherForecast = ({
  lon,
  lat,
}: {
  lon: number;
  lat: number;
}): ThunkAction<void, RootState, null, WeatherForecastAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: WEATHER_FORECAST_REQUESTED,
      });

      const res = await invokeAPI({
        url: URLS.FORECAST,
        params: {
          lat,
          lon,
          exclude: 'current,hourly,minutely,alerts',
        },
      });

      if (res.status !== 200) {
        throw new Error(res.data.message);
      }

      dispatch({
        type: WEATHER_FORECAST_SUCCEEDED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WEATHER_FORECAST_FAILED,
        payload: err.message,
      });
    }
  };
};
