import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from './Card';
function Home() {
    
  return (
    <Container>
     <Navbar />
     <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
     </Banner>
     <Main>
    <Card 
    id={1}
    image={"./echo.png"}
     price={2500}
     rating={3}
     title={"echo dot"}
    
    />
    <Card
     id={2}
    image={"./echo3.jpg"}
    price={2470}
    rating={4.5}
    title={"Carfia Square polarized Sunglasses for women  CA5343"}/>

    <Card 
     id={3}
    image={"./echo2.jpg"}
    price={49000}
    rating={4.5}
    title={"One plus nord  CE4 light  5G (Super silver 8GB RAM"}/>


    <Card 
     id={4}
    image={"./echo4.jpg"}
    price={1099}
    rating={4}
    title={"boAt Airdopes 141 Blutooth TWS  wiht Earbuds 42H"}/>

    <Card
     id={5}
    image={"./echo5.jpg"}
    price={2499}
    rating={5}
    title={"SAfari Pentagon Hardside small size cabin Trolly"}/>

    <Card 
     id={6}
    image={"./echo6.jpg"}
    price={630}
    rating={3.5}
    title={"Skybags Casual BAckpack 28L ,2 comaprtment, padded"}/>

    <Card 
     id={7}
    image={"./echo7.jpg"}
    price={13990}
    rating={4.5}
    title={"LG 80 cm (32 inches) HD Ready smart LED TV (gray)"}/>

    <Card 
     id={8}
    image={"./echo8.jpg"}
    price={103999}
    rating={3}
    title={"Lenovo LOQ intel Core i7-1365hX Gamimg Laptop"}/>

    <Card 
     id={9}
    image={"./echo9.jpg"}
    price={899}
    rating={4.5}
    title={"Vector X Renger BAdminton shoe for men"}/>

    <Card 
     id={10}
    image={"./echo10.jpg"}
    price={740}
    rating={3}
    title={"Lavie Women's small Bag | Ladies purse"}/>

    <Card
     id={11}
    image={"./echo11.jpg"}
    price={439}
    rating={4}
    title={"MODARUE Annime T shirt for Boys -Naruto"}/>

    <Card 
     id={12}
    image={"./echo12.jpg"}
    price={189}
    rating={5}
    title={"Patio Planet 4.3 inches Metal Planter 1"}/>
     </Main>
    </Container>
  )
}

const Container= styled.div`
width:100%;
background-color:rgb(234,237,237);
max-width:1400px;
margin:auto;
height:fit-content;`;
const  Banner =styled.div`
width:100%;
img{
   width:100%;
   -webkit-mask-image: linear-gradient(to bottom ,
   rgba(0,0,0,2),
   rgba(0,0,0,0.95),
   rgba(0,0,0,0.75),
   rgba(0,0,0,0.55),
   rgba(0,0,0,0)
   );

   &:nth-child(2)
   {
    display:none;
   }
    @media only screen and (max-width: 767px)
    {
     &:nth-child(1)
     {
       display: none;
     }
       &:nth-child(2)
       {
         display:block;
         -webkit-mask-image:none;
       }

    }
}
`;
const Main=styled.div`
display:grid;
justify-content:center;
place-items :center;
width:100%;
grid-auto-rows:420px 420px;
grid-template-columns:repeat(4, 280px);
grid-gap:20px;

@media only screen and (max-width:767px)
{
   grid-template-column: repeat(2,50%);
   grid-gap:0;
}

@media only screen and (min-width: 767px) and (max-width:1200px)
{
grid-template-columns:repeat(3,30%);
}

@media only screen and(min-width:767px)
{
  margin-top : -130px;
  padding: 10px 0px;
}

`;


export default Home