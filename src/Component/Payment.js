import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Address from './Address';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Payment() {
    const [{address, basket}] = useStateValue()
    const navigate = useNavigate();

  const placeOrder = (e) => {
    e.preventDefault();
    navigate('/Order'); 
  };
  return (
   <Container>
    <Navbar/>
    <Main>
       <ReviewContainer>
        <h2>Review your order</h2>
        <AddressContainer>
      <h5>shipping address</h5>
     <div>
        <p>{address?.fullname}</p>
        <p>{address?.flat}</p>
        <p>{address.area}</p>
        <p>{address.landmark}</p>
        <p>{address.city}</p>
        <p>{address.state}</p>
        <p>Phone : {address.phone}</p>

     </div>

        </AddressContainer>
        <PaymentContainer>
            <h5>Payment Method</h5>
            <div>

                <p>Card Details</p>
            </div>
        </PaymentContainer>
        <OrderContainer>
            <h5>Your Order</h5>
            <div>
            {
            basket?.map((product) => (
              <product>
              <Image>
                 <img src={product.image} alt="" />    
              </Image>
              <Desc>
                <h4>{product.title}</h4>
                <p>₹ {product.price}</p>
                
              </Desc>
            </product>

                
            ))
}
            </div>
        </OrderContainer>
        </ReviewContainer> 
        <Subtotal>
          <CurrencyFormat  renderText={(value) => (
            <>
               <p>
                Subtotal({basket.length} items):
                <strong> {value}</strong>
               </p>
               <small>
                <input type="checkbox" />
                <span>This order containes a gift</span>
               </small>
             </>
          )}
          decimalScale={2} 
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeparator={true}
          prefix={"₹ "}
          />
          <button onClick={placeOrder}>Place Order</button>
        </Subtotal>
       
    </Main>
    
   </Container>
  )
}

const Container =styled.div`
 width:100%;
 height:fit-content;
 max-width:1400px;
 background-color:rgb(234,237,237);

`;

const Main =styled.div`
  padding:15px;
  display:flex;


  @media only screen and (max-width:1200px)
  {
     flex-direction:column;
  }


`;
const ReviewContainer=styled.div`
    background-color:#fff;
    flex:0.7;
    padding:15px;

    h2{
       font-weight:500;
       border-bottom: 1px solid lightgray;
       padding-bottom:15px;
    }

`;
const AddressContainer =styled.div`
     margin-top:20px;
     div
     {
        margin-top:10px;
        margin-left:10px;

     }
        p
        {
          font-size:14px;
          margin-top:4px;
        }
`;

const PaymentContainer =styled.div`
   margin-top:15px;

   div{
      margin-top:15px;
      margin-left:15px;
      
      p
      {
        font-size:14px;
      }
   }
`;


const OrderContainer =styled.div`
margin-top:30px;
`;

const  product=styled.div`
display:flex;
align-items:center;
`;

const Image=styled.div`
flex:0.3;
img{
  width:30%;
  height:fit-content;
}`;
const Desc=styled.div`
flex:0.7;

h4{
   font-weight:600;
   font-size:18px
}
   p{
     font-weight:600;
     margin-top:10px;
   }

   button
   {
     background-color:transparent;
     color:#1384b4;
     border:none;
     outline:none;
     margin-top:10px;
     cursor:pointer;

     &:hover
     {
        text-decoration:underline;
       }
     
   }
`;


const Subtotal=styled.div`
flex:0.3;
background-color:#fff;
margin-left:15px;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media only screen and (max-width:1200px)
{
flex:none;
margin-top:20px;
}


p{
   font-size:20px; 
}
   small{
     display:flex;
     align-item:center;
     margin-top:10px;

     span
     {
       margin-left:10px;
     }
   }
     button
     {
       width:65%;
       height:33px;
       margin-top:20px;
       background-color:#ffd814;
       border:none;
       outline:none;
       cursor:pointer;
       border-radius: 8px;
     }

`;


export default Payment