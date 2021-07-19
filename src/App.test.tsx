import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { currentWeatherMock } from './fixtures/CurrentWeather.fixture';
import { weatherForecastMock } from './fixtures/WeatherForecast.fixture';
import { CURRENT_WEATHER_REQUESTED } from './store/actionTypes';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render CurrentWeather and Forecast', () => {
    const store = mockStore({
      currentWeather: { data: currentWeatherMock },
      weatherForecast: { data: weatherForecastMock },
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('Forecast').length).toEqual(1);
  });

  it('should render error from current weather', () => {
    const store = mockStore({
      currentWeather: { data: null, error: 'city not found' },
      weatherForecast: { data: weatherForecastMock },
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.find('Error').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('Forecast').length).toEqual(0);
  });

  it('should render error from weather forecast', () => {
    const store = mockStore({
      currentWeather: { data: currentWeatherMock },
      weatherForecast: { data: null, error: 'city not found' },
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.find('Error').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('Forecast').length).toEqual(0);
  });

  it('should dispatch getWeather action on search', () => {
    const store = mockStore({
      currentWeather: { data: currentWeatherMock },
      weatherForecast: { data: weatherForecastMock },
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    //@ts-ignore
    wrapper.find('Search').props().onSearch();

    const actions = store.getActions();
    expect(actions).toEqual([{ type: CURRENT_WEATHER_REQUESTED }]);
  });
});
