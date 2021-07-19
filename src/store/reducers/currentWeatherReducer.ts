import { CurrentWeatherAction, CurrentWeatherState } from '../types';
import {
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
  CURRENT_WEATHER_FAILED,
} from '../actionTypes';

const initialState: CurrentWeatherState = {
  data: null,
  loading: false,
  error: '',
};

const currentWeatherReducer = (
  state = initialState,
  action: CurrentWeatherAction,
): CurrentWeatherState => {
  switch (action.type) {
    case CURRENT_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_WEATHER_SUCCEEDED:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case CURRENT_WEATHER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default currentWeatherReducer;
