import { motion } from 'framer-motion'
import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'



const Cuisine = () => {

    const[cuisine, setCuisine] = useState([]);

    let params = useParams()

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)

    }, [params.type]);
  return (
   <Grid
        animate={{opacity: 1}}
        initial = {{opacity:0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
   
   >
    {cuisine.map((item) =>{

        return (
            <Card key = {item.id}>
                <Link to = {"/recipe/" + item.id}> 
                    <img src={item.image} alt="" />
                    <p> {item.title} </p>
                </Link>

            </Card>
        )
    }
    
    )}

    </ Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr) );
    grid-gap: 3rem;
    

    @media screen and (max-width: 450px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 1fr) );
        grid-gap: 1.5rem;

        p{
            font-size: 0.5;
        }
        margin:2px;

    }
`

const Card = styled.div ` 
    img {
        width: 100%;
        border-radius: 2rem
    }

    a {
        text-decoration: none;
    }

    p {
        text-align: center;
        padding: 1rem;
        font-weight: 600;
        font-size: 1rem;
    }

    
`
      


export default Cuisine
