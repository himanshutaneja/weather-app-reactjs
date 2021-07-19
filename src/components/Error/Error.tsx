import { FC } from 'react';
import { ErrorContainer } from './styles';

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <strong>Error. </strong>
      {message}
    </ErrorContainer>
  );
};

export default Error;
