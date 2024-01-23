import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import {GiKnifeFork} from "react-icons/gi"
import { ImSpoonKnife } from "react-icons/im";
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string'
import styled from 'styled-components'



function Popup  ()   {
  const [open, setOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm();
  const [nutritionalRequirements, setNutritionalRequirements] = useState({includeIngredients:"", excludeIngredients:"", maxCal: 600, minCal:0, minProtein:0, maxFat:100})

  const navigate = useNavigate();

  const getRequirements = (dataset) => {
    console.log("Requirements for route: ", nutritionalRequirements)
   
    if (!nutritionalRequirements.includeIngredients){
      nutritionalRequirements.includeIngredients = "onion"
    }
    if (!nutritionalRequirements.excludeIngredients){
      nutritionalRequirements.excludeIngredients = "moose"
    }
    if (!nutritionalRequirements.maxCal){
      nutritionalRequirements.maxCal = 900
    }

    if (!nutritionalRequirements.minCal){
      nutritionalRequirements.minCal = 1
    }

    if (!nutritionalRequirements.minProtein){
      nutritionalRequirements.minProtein = 1
    }

    if (!nutritionalRequirements.maxFat){
      nutritionalRequirements.maxFat = 900
    }

    const queryParams = queryString.stringify(nutritionalRequirements);
    console.log("query params:", queryParams)
    navigate(`/filterSearched/${queryParams}`)
    

  }
  useEffect(() => {
    getRequirements(nutritionalRequirements);
    
  }, [nutritionalRequirements]);


  const onSubmit = (data) => {
    
   

    console.log("Form data: ", data);
    nutritionalRequirements.includeIngredients = data.includeIngredients
    nutritionalRequirements.excludeIngredients = data.excludeIngredients
    nutritionalRequirements.maxCal = data.maxCal
    nutritionalRequirements.minCal = data.minCal
    nutritionalRequirements.minProtein = data.minProtein
    nutritionalRequirements.maxFat = data.maxFat
    setNutritionalRequirements({...nutritionalRequirements})

    console.log("nutritonal reqs: ", nutritionalRequirements)
    reset()
    
    

  
  };



  
  
    
  return (
    <>
    
  
  
    <PopUpButton> <Button onClick={() => setOpen(true)} > Extended Search</Button> </PopUpButton>
    
    
    <Dialog 
      fullWidth
      maxWidth="md"
      open = {open}
      onClose ={() => setOpen(false)}
      aria-labelledby="'dialog-title" 
      aria-describedby="dialog-description"
    >
     
      <AdvancedFormStyle>
      <DialogTitle id="dialog-title"> <h4>Extended Search Options</h4></DialogTitle>
      <DialogContent>
      
          
          <form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label htmlFor="includeIngredients"> Include Ingredients: </label>
            <input
              type="text"
              id="includeIngredients"
              placeholder="e.g., chicken, tomatoes, garlic"
              {...register("includeIngredients", { pattern: /^[A-Za-z]+$/i })}
            />
          </div>

          <div>
            <label htmlFor="excludeIngredients"> Exclude Ingredients: </label>
            <input
              type="text"
              id="excludeIngredients"
             
              {...register("excludeIngredients", { pattern: /^[A-Za-z]+$/i })}
            />
          </div>

          <div>
            <label htmlFor="maxCal"> Maximum Calories: </label>
            <input  type="number" id="maxCal"  {...register("maxCal", { min: 1 })} />
          </div>

          <div>
            <label htmlFor="minCal"> Minimum Calories: </label>
            <input  type="number" id="minCal"  {...register("minCal", { min: 1 })} />
          </div>

          <div>
            <label htmlFor="minProtein"> Minimum Protein: </label>
            <input placeholder = " Enter in grams" type="number" id="minProtein"  {...register("minProtein", { min: 1 })} />
          </div>

          <div>
            <label htmlFor="maxFat"> Maximum Fat: </label>
            <input placeholder = "Enter in grams" type="number" id="maxFat" {...register("maxFat", { min: 1 })} />
          </div>

         


          
          <DialogActions>
            
            <StyleSubmit>
              <Button id="sumbit-button" color="success" type="submit" autoFocus onClick={() => { setOpen(false); }}> Search <ImSpoonKnife /></Button>
            </StyleSubmit>
           
            
            <StyleCancel>
            <Button color="error" onClick={() => setOpen(false)}> Cancel  <GiKnifeFork/> </Button>

            </StyleCancel>
      
           
          </DialogActions>
          
          
        </form>
       

      
        
      </DialogContent>
      </AdvancedFormStyle>
      
      
    </Dialog>
   
  

  </>

  )
}

const PopUpButton =styled.div`
margin-top:5px;
margin-left: 50px;

`

const AdvancedFormStyle =styled.div`



h4{
  text-align: center;
}



div{
  
  margin-top: 10px;
  
}
input{
  width: 60%;
  height: 20px;
  border: 2px solid #7e7878;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #f7e2bc;
  
  

}

#submit-button {
  background-color: green;
}


label{
  color:#482908;
  font-weight: 600;
}


`

const StyleSubmit =styled.div`
border: 1px solid green;

`

const StyleCancel =styled.div`
border: 1px solid red;
`


export default Popup
