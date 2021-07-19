import {
  WEATHER_FORECAST_REQUESTED,
  WEATHER_FORECAST_SUCCEEDED,
  WEATHER_FORECAST_FAILED,
} from '../actionTypes';
import weatherForecastReducer from './weatherForecastReducer';
import { weatherForecastMock } from '../../fixtures/WeatherForecast.fixture';

describe('weatherForecastReducer', () => {
  it('should return initial state', () => {
    //@ts-ignore
    expect(weatherForecastReducer(undefined, {})).toEqual({
      data: null,
      loading: false,
      error: '',
    });
  });

  it('should handle WEATHER_FORECAST_REQUESTED action type', () => {
    expect(
      weatherForecastReducer(
        { loading: false, data: null, error: '' },
        { type: WEATHER_FORECAST_REQUESTED },
      ),
    ).toEqual({
      loading: true,
      data: null,
      error: '',
    });
  });

  it('should handle WEATHER_FORECAST_SUCCEEDED action type', () => {
    expect(
      weatherForecastReducer(
        { loading: true, data: null, error: '' },
        { type: WEATHER_FORECAST_SUCCEEDED, payload: weatherForecastMock },
      ),
    ).toEqual({
      loading: false,
      data: weatherForecastMock,
      error: '',
    });
  });

  it('should handle WEATHER_FORECAST_FAILED action type', () => {
    expect(
      weatherForecastReducer(
        { loading: false, data: null, error: '' },
        { type: WEATHER_FORECAST_FAILED, payload: 'error occurred' },
      ),
    ).toEqual({
      loading: false,
      data: null,
      error: 'error occurred',
    });
  });
});
