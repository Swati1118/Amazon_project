import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Order() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <h2>Order Placed Successfully!</h2>
      <button onClick={backToHome}>Back to Home</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;

  h2 {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #ffd814;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #ffce00;
    }
  }
`;

export default Order;
