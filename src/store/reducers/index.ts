import { combineReducers } from 'redux';
import currentWeatherReducer from './currentWeatherReducer';

export default combineReducers({
  currentWeather: currentWeatherReducer,
});
