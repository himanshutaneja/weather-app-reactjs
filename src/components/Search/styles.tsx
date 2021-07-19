import styled from 'styled-components';

export const SearchBox = styled.div`
  background-color: #046f94;
`;

export const SearchBarWrapper = styled.div`
  padding: 11px;
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0 400px;
`;

export const SearchBar = styled.input`
  padding: 5px 6px;
  border: 0;
  border-radius: 20px;
  background: hsla(0, 0%, 100%, 0.2);
  text-align: center;
  font-size: 1rem !important;
  color: #fff;
  width: 100%;
  cursor: text;

  ::placeholder {
    color: #fff;
  }
`;
