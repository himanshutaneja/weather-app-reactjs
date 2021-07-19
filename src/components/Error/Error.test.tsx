import { shallow, ShallowWrapper } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Error message="error message" />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
