import { shallow, ShallowWrapper } from 'enzyme';
import Forecast from './Forecast';
import { weatherForecastMock } from '../../fixtures/WeatherForecast.fixture';

describe('Forecast', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Forecast data={weatherForecastMock} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
