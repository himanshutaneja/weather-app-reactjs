export const weatherForecastMock = {
  lat: -33.8679,
  lon: 151.2073,
  timezone: 'Australia/Sydney',
  timezone_offset: 36000,
  daily: [
    {
      dt: 1626660000,
      temp: {
        day: 14.83,
        min: 8.14,
        max: 15.26,
        night: 9.75,
        eve: 12.81,
        morn: 8.27,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      rain: 11.1,
    },
    {
      dt: 1626746400,
      temp: {
        day: 16.09,
        min: 8.81,
        max: 16.54,
        night: 11.31,
        eve: 13.85,
        morn: 9.07,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      rain: 2,
    },
  ],
};
