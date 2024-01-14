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

    const check = localStorage.getItem('veggie')

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
          arrows: false,
          pagination: false,
          drag: "free",
          gap: '5rem'
        }}
      >
        {healthy.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to= {"/recipe/" + recipe.id}> 
                  <p>{recipe.title}</p>
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

margin: 4rm 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

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
    left: 0;
    width:100%;
    height: 100%;
    object-fit: cover;
    
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
