import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

import React from 'react'


const AdvancedSearchForm = () => {
 

    const [includeIngredients, setInclude] = useState("")
    const [excludeIngredients, setExclude] = useState("")
    const [minProtein, setMinProtein] = useState("")
    const [minCalories, setMinCalories] = useState("")
    const [maxCalories, setMaxCalories] = useState("")
    const [maxFat, setMaxFat] = useState("");
    const [maxCarbs, setMaxCarbs] = useState("");



    const SubmitForm = (e) => {


        const data = {
        includeIngredients: includeIngredients !== '' ? includeIngredients : null,
        exludeIngredients: excludeIngredients !== '' ? excludeIngredients : null,
        minProtein: minProtein !== '' ? minProtein : null,
        minCalories: minCalories !== '' ? minCalories : null,
        maxCalories: maxCalories !== '' ? maxCalories : null,
        maxFat: maxFat !== '' ? maxFat : null,
        maxCarbs: maxCarbs !== '' ? maxCarbs : null
            
        }


       console.log(data)

    
        
      

    }
    
  


  return (
    <>
      

      <PopupForm>
      <h2> Nutritional Requirements</h2>

        <Form.Group className="mb-3">
            <Form.Label> Include Ingredients: </Form.Label>
            <Form.Control onChange={(e) => {setInclude(e.target.value)}} type="text" name="includeIngredients" placeholder="Enter MUST-HAVES separated by comma (e.g., chicken, onion, garlic)"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Exclude Ingredients: </Form.Label>
            <Form.Control onChange={(e) => {setExclude(e.target.value)}} type="text" name="excludeIngredients" placeholder="Enter ingredients to exclude, separated by comma (e.g., beef, dairy, gluten)"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Minimum Protein: </Form.Label>
            <Form.Control onChange={(e) => {setMinProtein(e.target.value)}} type="number" name="minProtein" placeholder="(grams) e.g. 40" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Minimum Calories: </Form.Label>
            <Form.Control onChange={(e) => {setMinCalories(e.target.value)}} type="number" name="minCalories" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Maximum Calories: </Form.Label>
            <Form.Control onChange={(e) => {setMaxCalories(e.target.value)}} type="number" name="maxCalories"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Maximum Fat: </Form.Label>
            <Form.Control onChange={(e) => {setMaxFat(e.target.value)}} type="number" name="maxFat"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Max Carbs: </Form.Label>
            <Form.Control onChange={(e) => {setMaxCarbs(e.target.value)}} type="number" name="maxCarbs"/>
        </Form.Group>

        <Button onClick={SubmitForm}>Submit</Button>

      </PopupForm>


    </>
  )
}

const PopupForm = styled(Form)`
    margin-right: 10px;
    

    h2 {
        margin: 5px 0;
        text-align: center;
    }

    .mb-3 {
        margin: 30px 10px 30px 10px; /* Adjust the value as needed */
        font-weight: 500;
    
        
    
        
    }

    input {
        margin: 10px 0 5px 0;
        height:20px;
        width: 100%;
        border-top: none;
        border-left: none;
        border-bottom-color: #9C6755;
        
       
        
    
    }


`;
export default AdvancedSearchForm

