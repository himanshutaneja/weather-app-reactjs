import styled from 'styled-components';

export const ForcastContainer = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
  background-image: linear-gradient(#046f94, #3493ad);
  justify-content: space-evenly;
`;

export const ForcastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Day = styled.h3`
  font-size: 1.125rem;
  line-height: 1.66em;
  border-bottom: 1px solid;
`;

export const TempMax = styled.div`
  font-size: 2rem;
`;

export const TempMin = styled.div`
  font-size: 1.125rem;
`;

export const WeatherIcon = styled.i`
  font-size: 2.5rem;
  margin: 10px 0 15px 0;
`;

export const Rain = styled.div`
  font-size: 1.125rem;
`;
