// Card.js

import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { useStateValue } from './StateProvider';

function Card({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        image,
        rating,
        quantity: 1, // Ensure quantity is initialized correctly
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="Product" />
      </Image>
      <Desc>
        <h5>{title}</h5>
        <StyledRating name="rating" value={rating} precision={0.5} readOnly />
        <p>₹ {price}</p>
        <button onClick={addToBasket}>Add to Cart</button>
      </Desc>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  flex: 0.3;

  img {
    width: 210px;
    height: 200px;
  }
`;

const Desc = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.7;

  h5 {
    font-size: 18px; /* Increase font size for better readability */
    font-weight: 600;
    margin-bottom: 8px;
    overflow: hidden; /* Prevent long titles from stretching the layout */
    text-overflow: ellipsis; /* Truncate long titles with ellipsis */
    white-space: nowrap; /* Ensure title stays on a single line */
  }

  p {
    font-weight: 600;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 100px;
    transition: transform 0.1s, background-color 0.1s;

    &:active {
      transform: scale(0.95);
      background-color: #ffc107;
    }
  }
`;

const StyledRating = styled(Rating)`
  color: #ff6d75;
`;

export default Card;
