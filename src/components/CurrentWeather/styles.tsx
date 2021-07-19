import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
  background-image: linear-gradient(#046f94, #3493ad);
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
  margin-bottom: 20px;
`;

export const Header = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const Location = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

export const Time = styled.div`
  font-size: 1.125rem;
  opacity: 0.65;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Temperature = styled.span`
  font-size: 6rem;
  line-height: 0.96em;
  font-weight: 500;
`;

export const Phrase = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const WeatherIcon = styled.i`
  font-size: 80px;
`;

export const TemperatureHighLow = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: right;
  margin: 12px;
`;
