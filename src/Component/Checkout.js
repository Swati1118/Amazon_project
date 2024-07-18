// Checkout.js

import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  const incrementItem = (id) => {
    dispatch({
      type: 'INCREMENT_ITEM',
      id,
    });
  };

  const decrementItem = (id) => {
    dispatch({
      type: 'DECREMENT_ITEM',
      id,
    });
  };

  const handleDiscountChange = (e) => {
    const percentage = parseInt(e.target.value);
    setDiscountPercentage(percentage);
    const total = (getBasketTotal(basket) * percentage) / 100;
    setTotalDiscount(total);
  };

  const handleProceedToPayment = () => {
    // Navigate to Payment page
    navigate('/Address');
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>
          {basket.map((product) => (
            <CartItem key={product.id}>
              <Image>
                <img src={product.image} alt={product.title} />
              </Image>
              <Desc>
                <h4>{product.title}</h4>
                <p>₹ {product.price}</p>
                <QuantityControl>
                  <button onClick={() => decrementItem(product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => incrementItem(product.id)}>+</button>
                </QuantityControl>
                <button onClick={() => removeFromBasket(product.id)}>Remove</button>
              </Desc>
            </CartItem>
          ))}
        </ShoppingCart>
        <Subtotal>
          <h3>Subtotal</h3>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Total Items ({basket.reduce((total, item) => total + item.quantity, 0)} items):
                  <strong> {value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={'₹ '}
          />
          <Discount>
            <div>
              <label>Discount (%)</label>
              <input type="number" min="0" max="100" value={discountPercentage} onChange={handleDiscountChange} />
            </div>
            <div>
              <label>Total Discount</label>
              <CurrencyFormat
                value={totalDiscount}
                displayType="text"
                thousandSeparator={true}
                prefix={'₹ '}
              />
            </div>
          </Discount>
          <TotalPayment>
            <h3>Total Payment</h3>
            <CurrencyFormat
              renderText={(value) => (
                <p>
                  <strong>{value}</strong>
                </p>
              )}
              decimalScale={2}
              value={getBasketTotal(basket) - totalDiscount}
              displayType="text"
              thousandSeparator={true}
              prefix={'₹ '}
            />
          </TotalPayment>
          <ProceedButton onClick={handleProceedToPayment}>Proceed to Payment</ProceedButton>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 1px solid red;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.div`
  flex: 0.3;

  img {
    width: 100%;
    height: auto;
  }
`;

const Desc = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    font-weight: bold;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  span {
    margin: 0 10px;
    font-weight: bold;
  }
`;

const Discount = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input,
    p {
      font-size: 16px;
    }
  }
`;

const TotalPayment = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }
`;

const ProceedButton = styled.button`
  width: 65%;
  height: 33px;
  margin-top: 20px;
  background-color: #ffd814;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`;

export default Checkout;
