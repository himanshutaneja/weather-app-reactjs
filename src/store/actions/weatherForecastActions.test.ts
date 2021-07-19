import {
  WEATHER_FORECAST_REQUESTED,
  WEATHER_FORECAST_SUCCEEDED,
  WEATHER_FORECAST_FAILED,
} from '../actionTypes';
import { weatherForecastMock } from '../../fixtures/WeatherForecast.fixture';

describe('weatherForecastActions', () => {
  describe('getWeatherForecast', () => {
    const dispatch = jest.fn();
    beforeEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    it('should record error when response status is not success', async () => {
      jest.doMock('../../helpers', () => ({
        invokeAPI: () => ({ status: 404, data: { message: 'not found' } }),
      }));

      const { getWeatherForecast } = require('./weatherForecastActions');

      await getWeatherForecast({ lat: 10, lon: 12 })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: WEATHER_FORECAST_REQUESTED,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: WEATHER_FORECAST_FAILED,
        payload: 'not found',
      });
    });

    it('should record success when current weather response is returned successfully', async () => {
      jest.doMock('../../helpers', () => ({
        invokeAPI: () => ({ status: 200, data: weatherForecastMock }),
      }));

      const { getWeatherForecast } = require('./weatherForecastActions');

      await getWeatherForecast({ lat: 10, lon: 12 })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: WEATHER_FORECAST_REQUESTED,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: WEATHER_FORECAST_SUCCEEDED,
        payload: weatherForecastMock,
      });
    });
  });
});
