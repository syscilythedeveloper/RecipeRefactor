import { useEffect, useState } from "react";
import {GiKnifeFork} from "react-icons/gi"
import styled from "styled-components"
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams()
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')
    const [nutrients, setNutrients] = useState([]);
    
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`);
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData)
        
      
        const nutrientsData = detailData.nutrition.nutrients;
        console.log(nutrientsData)

        const filteredNutrients = nutrientsData.filter(nutrient => {
            const allowedNames = ["Calories", "Fat", "Saturated Fat", "Carbohydrates", "Cholesterol", "Sodium", "Protein", "Fiber" ];
            return allowedNames.includes(nutrient.name);
          });

        const formattedNutrients = filteredNutrients.map(({ name, amount, unit }) => ({
            name,
            amount,
            unit,
          }));
   
        setNutrients(formattedNutrients)


        
    
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name])



  return (
    <DetailWrapper>
      <div>
        <h2><span>{details.title}</span></h2>
        <img src ={details.image} alt=""></img>
      </div>
      <Info>
        <Button 
            className = {activeTab === "instructions" ? "active": ""} 
            onClick={() => setActiveTab('instructions')}
        > 
            Instructions 
        </Button>

        <Button 
        className = {activeTab === "ingredients" ? "active": ""} 
        onClick={() => setActiveTab('ingredients')}
        > 
        Ingredients 
        </Button>

        <Button 
        className = {activeTab === "nutritionInfo" ? "active": ""} 
        onClick={() => setActiveTab('nutritionInfo')}
        > 
        Essential Nutritional Info 
        </Button>

        {activeTab === "instructions" && (   
            <div>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
        )}
        {activeTab === "ingredients" && (
                <ul>
                {details.extendedIngredients?.map((ingredient) => 
                <li key ={ingredient.id}> {ingredient.original}</li>
                )};
                </ul>
        )}
        {activeTab === "nutritionInfo" && (
               <ul>
               {nutrients.map(nutrient => (
                   <li key={nutrient.name}>
                       <b>{nutrient.name}</b>: {nutrient.amount} {nutrient.unit}
                   </li>
               ))}
           </ul>
        )}
     
    
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin: 10px;
    display: flex; 

    @media screen and (max-width: 450px) {
        
        img{
            max-width: 100%;
            max-height: 100%;
        }
        span{
            font-size: 1rem;
        }

        Button{
            font-size: 0.5rem;
            padding:0.5rem 1rem;
        }
        ul{
            margin: 0px;
            
        }

         ul li{
            font-size: .7rem;
            list-style-type: disc;
        }

        ol li {
            
            font-size: .7rem;
            
            margin:0px;
          
        }

    }


    
    
    

    .active {
        background: linear-gradient( #494949, #313131);
        color: white; 
        
    }
    h2{ 
        margin-bottom: 1.2rem;
        }
    li{ font-size: 1.2rem;
        line-height: 2.5rem;
        list-style-type: none; 
    }
    ul {
        margin-top: 2rem;
    };

    p{
        margin-top: 2rem;
        font-size: 30px;
        
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
margin-left: 2rem;
`
export default Recipe
