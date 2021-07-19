import {
  CURRENT_WEATHER_FAILED,
  CURRENT_WEATHER_REQUESTED,
  CURRENT_WEATHER_SUCCEEDED,
} from '../actionTypes';
import { currentWeatherMock } from '../../fixtures/CurrentWeather.fixture';

describe('currentWeatherActions', () => {
  describe('getWeather', () => {
    const dispatch = jest.fn();
    const getWeatherForecastMock = jest.fn();
    beforeEach(() => {
      jest.resetModules();
      jest.clearAllMocks();
    });

    it('should record error when response status is not success', async () => {
      jest.doMock('../../helpers', () => ({
        invokeAPI: () => ({ status: 404, data: { message: 'not found' } }),
      }));

      const { getWeather } = require('./currentWeatherActions');

      await getWeather('some city')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: CURRENT_WEATHER_REQUESTED,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: CURRENT_WEATHER_FAILED,
        payload: 'not found',
      });
    });

    it('should record success when current weather response is returned successfully', async () => {
      jest.doMock('../../helpers', () => ({
        invokeAPI: () => ({ status: 200, data: currentWeatherMock }),
      }));
      jest.doMock('./weatherForecastActions', () => ({
        getWeatherForecast: getWeatherForecastMock,
      }));

      const { getWeather } = require('./currentWeatherActions');

      await getWeather('some city')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: CURRENT_WEATHER_REQUESTED,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: CURRENT_WEATHER_SUCCEEDED,
        payload: currentWeatherMock,
      });

      expect(dispatch).toHaveBeenCalledWith(
        getWeatherForecastMock(currentWeatherMock.coord),
      );
    });
  });
});
