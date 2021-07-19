import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index', () => {
  it('should render application correctly', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    require('./index');

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
  });
});
