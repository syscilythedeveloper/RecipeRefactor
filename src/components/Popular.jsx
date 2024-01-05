import { useEffect, useState } from "react"
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(()=> {
        getPopular()

    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
        const data = await api.json()
        console.log(data)
        setPopular(data.recipes)
    }



  return (
    <div>
      {popular.map((recipe) => {
        return (
            <Wrapper>
                <h3> Popular Picks </h3>
                {popular.map((recipe) => {
                    return (
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt="recipe img"/>
                        </Card>

                    );
                })}
            </Wrapper>
        )
      })}
    </div>
  );
}

const Wrapper = styled.div`
margin: 4rm 0rem;`

const Card = styled.div`
min-height: 25rem; 
border-radius: 2rem;
overflow: hidden;

img {
    border-radius: 2rem;
}
`

export default Popular
