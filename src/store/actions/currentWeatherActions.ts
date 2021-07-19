import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { CurrentWeatherAction } from '../types';
import {
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
  CURRENT_WEATHER_FAILED,
} from '../actionTypes';
import { getWeatherForecast } from './weatherForecastActions';
import { invokeAPI } from '../../helpers';
import { URLS } from '../../constants';

export const getWeather = (
  city: string,
): ThunkAction<void, RootState, null, CurrentWeatherAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: CURRENT_WEATHER_REQUESTED,
      });

      const res = await invokeAPI({
        url: URLS.CURRENT_WEATHER,
        params: {
          q: city,
        },
      });

      if (res.status !== 200) {
        throw new Error(res.data.message);
      }

      const resData = res.data;
      dispatch({
        type: CURRENT_WEATHER_SUCCEEDED,
        payload: resData,
      });

      dispatch(getWeatherForecast(resData.coord));
    } catch (err) {
      const errorMessage = err?.response?.data?.message || err.message;
      dispatch({
        type: CURRENT_WEATHER_FAILED,
        payload: errorMessage,
      });
    }
  };
};
