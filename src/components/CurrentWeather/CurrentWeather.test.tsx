import { shallow, ShallowWrapper } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import { currentWeatherMock } from '../../fixtures/CurrentWeather.fixture';

describe('CurrentWeather', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<CurrentWeather data={currentWeatherMock} />);
  });

  it('should render search bar correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
