import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components"
import { LiaSadTearSolid } from "react-icons/lia";




const FilterSearched = () => {
  const [filterSearchedRecipes, setFilterSearchRecipes] = useState([])
  const [reqs, setReqs] = useState([])
  let info = useParams()['*'];


  useEffect (() =>{
    console.log("info", info)
    const keyValuePairs = info.split('&');
    console.log(keyValuePairs)
    const resultObject = keyValuePairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = value;
      return acc;
    }, {});


  console.log("results: ", resultObject)
  console.log("ingredients: ", resultObject.ingredients)
  console.log("Maximum Calories: ", resultObject.maxCal)
  console.log("Minimum Protein: ", resultObject.minProtein)
  setReqs(resultObject)


  }, [info])

  useEffect (() => {
    console.log("Reqs:", reqs)
    getFilterSearched(reqs)
}, [reqs])


  const getFilterSearched = async(resultObject) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&maxCal=${resultObject.maxCal}&includeIngredients=${resultObject.ingredients}&minProtein=${resultObject.minProtein}`)
    const recipes = await data.json();

    setFilterSearchRecipes(recipes.results)
    console.log(filterSearchedRecipes)
    
}



return (
  <>
  {filterSearchedRecipes.length === 0 ? (
    <h3>
      <LiaSadTearSolid />Oh no! No results match your criteria. Please refine your search.
    </h3>
  ) : (
    <Grid>
      {filterSearchedRecipes.map((item) => (
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

    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default FilterSearched

