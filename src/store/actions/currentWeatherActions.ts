import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { CurrentWeatherAction } from '../types';
import {
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
  CURRENT_WEATHER_FAILED,
} from '../actionTypes';
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

      dispatch({
        type: CURRENT_WEATHER_SUCCEEDED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CURRENT_WEATHER_FAILED,
        payload: err.message,
      });
    }
  };
};
