import React from 'react'
import styled from 'styled-components';

function SignUp() {
  return (
    <Container>
        <Logo>
                <img src="./amazon_logo.png" alt="" />
            </Logo>
            <FormContainer>
                <h3>Sign-Up</h3>
                <InputContainer>
                    <p>Full Name</p>
                    <input type="text" placeholder='john smith' />
                </InputContainer>
                <InputContainer>
                    <p>Email</p>
                    <input type="email" placeholder="example@example.com" />
                </InputContainer>
                <InputContainer>
                    <p>Password</p>
                    <input type="password" placeholder="**********" />
                </InputContainer>
                <SignUpButton>Create Account in Amazon</SignUpButton>
                <InfoText>By continuing, you agree to Amazon's  <span>Conditions of Use</span> and<span> Privacy Notice.</span></InfoText>
                  </FormContainer>
                  <LoginButton>Back to Login</LoginButton>
                
    </Container>
  )
}

const Container = styled.div`
 width: 40%;
 min-width: 200px;
 height: fit-content;
 padding : 15px;
 margin :auto;
 display : flex;
 flex-direction : column;
 align-items :center;
 `;
 const Logo = styled.div`
width:120px;
margin-bottom: 20px;
img {
width:100%
}`;

const FormContainer = styled.form`
     border: 1px solid lightgray;
     width : 55%;
     height: fit-content;
     display : flex;
     flex-direction : column;
     align-items : center;
     justify-content : center;
     padding: 15px;


  h3 {
     font-size :28px;
     font-weight: 400;
     line-height: 33px;
     align-self: flex-start;
     margin-bottom: 10px;
  }
    
  `;
  const InputContainer = styled.div`
  width:100%;
  padding: 10px;
  p {
     font-size :14px;
     font-weight: 600;
  }
  
  input {
    width :95%;
    height :33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top : 5px;

    &:hover{
     border: 1px solid orange;
    }
  }
  `;
  const SignUpButton = styled.button`
  width: 70%;
  height: 35px;
   font-size: 12px;
   margin-top: 20px;
  `;
  const InfoText = styled.p`
 font-size : 12px;
 word-wrap:none;
 width: 100%;
 word-break: normal;
 margin-top:20px
 
 span {
    color: blue;
 }
`;
const LoginButton = styled.button`
  width: 50%;
  height: 35px;
  background-color: #f3b414;
  border:none;
  outline: none;
  border-radius :10px;
  margin-top:30px; 
  `;

export default SignUp