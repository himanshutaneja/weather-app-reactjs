import { shallow, ShallowWrapper } from 'enzyme';
import Forecast from './Forecast';
import { weatherForecastMock } from '../../fixtures/WeatherForecast.fixture';

describe('Forecast', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Forecast data={weatherForecastMock} />);
  });

  it('should render search bar correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
