import {
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
  CURRENT_WEATHER_FAILED,
} from './actionTypes';

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface CurrentWeather {
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
  };
  weather: Weather[];
}

interface CurrentWeatherRequestedAction {
  type: typeof CURRENT_WEATHER_REQUESTED;
}

interface CurrentWeatherSucceededAction {
  type: typeof CURRENT_WEATHER_SUCCEEDED;
  payload: CurrentWeather;
}

interface CurrentWeatherFailedAction {
  type: typeof CURRENT_WEATHER_FAILED;
  payload: string;
}

export type CurrentWeatherAction =
  | CurrentWeatherRequestedAction
  | CurrentWeatherSucceededAction
  | CurrentWeatherFailedAction;

export interface CurrentWeatherState {
  data: CurrentWeather | null;
  loading: boolean;
  error: string;
}
