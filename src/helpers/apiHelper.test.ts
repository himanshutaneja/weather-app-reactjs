import { URLS } from '../constants';

describe('apiHelper', () => {
  const axiosGetMock = jest.fn();
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.doMock('axios', () => ({
      get: axiosGetMock.mockImplementation(() =>
        Promise.resolve('mock response'),
      ),
    }));
  });

  it('should invoke api with request params', async () => {
    const original = process.env.REACT_APP_API_KEY;
    process.env.REACT_APP_API_KEY = 'api key';
    const { invokeAPI } = require('./apiHelper');
    const response = await invokeAPI({ url: 'someUrl', params: { q: 'test' } });

    expect(response).toEqual('mock response');
    expect(axiosGetMock).toHaveBeenCalledWith(`${URLS.BASE_URL}someUrl`, {
      params: {
        appid: 'api key',
        q: 'test',
        units: 'metric',
      },
    });
    process.env.REACT_APP_API_KEY = original;
  });
});
