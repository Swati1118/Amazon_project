import React from 'react'
import styled from 'styled-components';
import { useStateValue } from "./StateProvider";
import { useNavigate} from 'react-router-dom';

function Navbar() {
    const [{basket}] =useStateValue();
    const Navigate = useNavigate();
  return (
    <Container>
      <Inner>
        <Logo>
          <img src="./amazon_logo1.png" alt="Amazon Logo" />
        </Logo>
        <SearchBar>
          <input type="text" placeholder='Search.....' />
          <SearchIcon>
            <img src="./searchIcon.png" alt="Search Icon" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton>
            <p>Hello</p>
            <p>Guest</p>
          </NavButton>
          
          <NavButton>
         <p>Return & Orders</p>
                              
          </NavButton>
          <BasketButton onClick={() => Navigate("/Checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchBar>
          <input type="text" placeholder='Search.....' />
          <SearchIcon>
            <img src="./searchIcon.png" alt="Search Icon" />
          </SearchIcon>
        </MobileSearchBar>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
 

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 767px)
   {
   justify-content:space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    margin-top: 10px;
    border-radius: 5px 0px 0px 5px;
  }
    @media only screen and (max-width: 767px)
    {
     display:none;
    }
`;

  const MobileSearchBar=styled.div`
     height:35px;
     width:90%;
     display:flex;
     align-items : center;
     padding :10px;

     input{
     flex:1;
     width :100%;
     height:100%;
     border:none;
     border-redius: 5px 0px 0px 5px;

     &::placeholder
     {
     padding-left:10px;
     }
     }

     @media only screen and (min-width: 768px)
     {
     display:none;
     }
  `;






const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;

  img {
    width: 22px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  justify-content :space-around;
  padding:5px 15px 


`;

const NavButton = styled.div`

  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  p{
     &:nth-child(1){
     font-size:12px;}
     &:nth-child(2)
     {
     font-size:14px;
     font-weight:600;
     }
  }
     p {
    margin: 0;
    padding: 0;  /* Remove default margin and padding */
  }

  p + p {
    margin-top: 5px;  /* Adjust spacing between <p> tags */
  }
`;

const BasketButton = styled.div`
  color: #fff;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
  height:90%;
  img{
  width:30px;
  margin-right:10px;}
  p{
  color:#fff;
  font-weight:500;}
`;
export default Navbar;
