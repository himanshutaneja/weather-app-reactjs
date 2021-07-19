export const currentWeatherMock = {
  coord: {
    lon: 151.2073,
    lat: -33.8679,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 15.05,
    feels_like: 14.02,
    temp_min: 13.55,
    temp_max: 16.42,
    pressure: 1013,
    humidity: 54,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
    deg: 313,
    gust: 3.13,
  },
  clouds: {
    all: 75,
  },
  dt: 1626666061,
  sys: {
    type: 2,
    id: 2018875,
    country: 'AU',
    sunrise: 1626641771,
    sunset: 1626678379,
  },
  timezone: 36000,
  id: 2147714,
  name: 'Sydney',
  cod: 200,
};
