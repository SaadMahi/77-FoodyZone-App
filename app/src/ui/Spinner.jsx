/* eslint-disable react/prop-types */
import styled from 'styled-components';

const SpinnerUi = styled.div`
  border: 16px solid darkgrey;
  border-top: 16px #323334 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: 100px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ children }) => {
  return (
    <Overlay>
      <SpinnerUi>{children}</SpinnerUi>
    </Overlay>
  );
};

export default Spinner;
