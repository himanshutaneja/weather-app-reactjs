import { WeatherForecastState, WeatherForecastAction } from '../types';
import {
  WEATHER_FORECAST_REQUESTED,
  WEATHER_FORECAST_SUCCEEDED,
  WEATHER_FORECAST_FAILED,
} from '../actionTypes';
const initialState: WeatherForecastState = {
  data: null,
  loading: false,
  error: '',
};

const weatherForecastReducer = (
  state = initialState,
  action: WeatherForecastAction,
): WeatherForecastState => {
  switch (action.type) {
    case WEATHER_FORECAST_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_FORECAST_SUCCEEDED:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case WEATHER_FORECAST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherForecastReducer;
