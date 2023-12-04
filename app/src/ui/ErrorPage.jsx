/* eslint-disable react/prop-types */
import styled from 'styled-components';

// Styled component for the error page container
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
`;

// Styled component for the error illustration
const ErrorIllustration = styled.img`
  max-width: 100%;
  height: auto;
`;

// Styled component for the error message
const ErrorMessage = styled.h1`
  font-size: 32px;
  color: #e74c3c;
  margin-top: 20px;
`;

// Styled component for the error description
const ErrorDescription = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

// Reusable component
const ErrorPage = ({ children }) => {
  return (
    <ErrorContainer>
      <ErrorIllustration
        src='https://placekitten.com/500/300'
        alt='Error Illustration'
      />
      <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
      <ErrorDescription>
        {children
          ? children
          : 'We are sorry, but it seems there was an error. Please try again later.'}
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorPage;
