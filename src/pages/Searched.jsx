import React from 'react'
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components"
import { LiaSadTearSolid } from "react-icons/lia";



const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    

    const getSearched = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();

        setSearchedRecipes(recipes.results)
    }

    useEffect (() => {
        getSearched(params.search)


    }, [params.search])




  return (
    <>
    {searchedRecipes.length === 0 ? (
      <h3>
        <LiaSadTearSolid />Oh no!no results match your criteria. Please refine your search.
      </h3>
    ) : (
      <Grid>
        {searchedRecipes.map((item) => (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        ))}
      </Grid>
    )}
  </>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr) );
    grid-gap: 3rem;
`

const Card = styled.div ` 
    img {
        width: 100%;
        border-radius: 2rem
    }

    a {
        text-decoration: none;
    }

    h3{}

    h4 {
        text-align: center;
        padding: 1rem;
    }
`
      


export default Searched
