import { combineReducers } from 'redux';
import currentWeatherReducer from './currentWeatherReducer';
import weatherForecastReducer from './weatherForecastReducer';

export default combineReducers({
  currentWeather: currentWeatherReducer,
  weatherForecast: weatherForecastReducer,
});
