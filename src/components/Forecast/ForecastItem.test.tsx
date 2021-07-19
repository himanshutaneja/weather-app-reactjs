import { shallow, ShallowWrapper } from 'enzyme';
import ForecastItem from './ForecastItem';
import { weatherForecastMock } from '../../fixtures/WeatherForecast.fixture';

describe('ForecastItem', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<ForecastItem data={weatherForecastMock.daily[0]} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
