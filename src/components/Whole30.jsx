import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Whole30 = () => {

  const [healthy, SetHealthy] = useState([]);

  useEffect(() => {
    getHealthy();
  }, []);

  const getHealthy = async () => {

    const check = localStorage.getItem('healthy')

    if(check){
        SetHealthy(JSON.parse(check))
    } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&diet="Whole30"`);
        const data = await api.json();


        localStorage.setItem('healthy', JSON.stringify(data.recipes))
        console.log(data.recipes);
        SetHealthy(data.recipes);

    }
  }
  return (
    <div>
    <Wrapper>
      <h3> Whole30 Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: true,
          gap: '5rem'
        }}
      >
        {healthy.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to= {"/recipe/" + recipe.id}> 
                  <p><span>{recipe.title}</span></p>
                  <img src={recipe.image} alt="recipe img" />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  </div>
  )
}


const Wrapper = styled.div`

margin: 5rem 10rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius:4rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px 5px #FFD68A;



  
  

  p {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    
    
  }


  img {
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &:hover {
    box-shadow: 0px 0px 15px 5px #482908; /* Adjusted box shadow on hover */
    transform: scale(1.05); /* Added scale transformation on hover */
  }

  &:hover p {
    color: #482908; /* Change text color on hover */
  }

  &:hover p span {
    background-color: white; /* Change text color on hover */
    width: 100%
  }
`;



const Gradient = styled.div`
z-index: 3; 
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`


export default Whole30
