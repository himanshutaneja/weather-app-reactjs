import { currentWeatherMock } from '../../fixtures/CurrentWeather.fixture';
import {
  CURRENT_WEATHER_FAILED,
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
} from '../actionTypes';
import currentWeatherReducer from './currentWeatherReducer';

describe('currentWeatherReducer', () => {
  it('should return initial state', () => {
    //@ts-ignore
    expect(currentWeatherReducer(undefined, {})).toEqual({
      data: null,
      loading: false,
      error: '',
    });
  });

  it('should handle CURRENT_WEATHER_REQUESTED action type', () => {
    expect(
      currentWeatherReducer(
        { loading: false, data: null, error: '' },
        { type: CURRENT_WEATHER_REQUESTED },
      ),
    ).toEqual({
      loading: true,
      data: null,
      error: '',
    });
  });

  it('should handle CURRENT_WEATHER_SUCCEEDED action type', () => {
    expect(
      currentWeatherReducer(
        { loading: true, data: null, error: '' },
        { type: CURRENT_WEATHER_SUCCEEDED, payload: currentWeatherMock },
      ),
    ).toEqual({
      loading: false,
      data: currentWeatherMock,
      error: '',
    });
  });

  it('should handle CURRENT_WEATHER_FAILED action type', () => {
    expect(
      currentWeatherReducer(
        { loading: false, data: null, error: '' },
        { type: CURRENT_WEATHER_FAILED, payload: 'error occurred' },
      ),
    ).toEqual({
      loading: false,
      data: null,
      error: 'error occurred',
    });
  });
});
