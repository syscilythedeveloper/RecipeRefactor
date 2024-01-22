import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import {GiKnifeFork} from "react-icons/gi"
import { CiForkAndKnife } from "react-icons/ci";
import { PiForkKnife } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string'
import styled from 'styled-components'



function Popup  ()   {
  const [open, setOpen] = useState(false)
  const { register, reset, handleSubmit } = useForm();
  const [nutritionalRequirements, setNutritionalRequirements] = useState({ingredients:"", maxCal: 500, minProtein:1})

  const navigate = useNavigate();

  const getRequirements = (dataset) => {
    console.log("Requirements for route: ", nutritionalRequirements)
    const queryParams = queryString.stringify(nutritionalRequirements);
    console.log("query params:", queryParams)
    navigate(`/filterSearched/${queryParams}`)
    

  }
  useEffect(() => {
    // This effect will run whenever nutritionalRequirements is updated
    getRequirements(nutritionalRequirements);
    
  }, [nutritionalRequirements]);


  const onSubmit = (data) => {
   

    console.log("Form data: ", data);
    nutritionalRequirements.ingredients = data.includeIngredients
    nutritionalRequirements.maxCal = data.maxCal
    nutritionalRequirements.minProtein = data.minProtein
    setNutritionalRequirements({...nutritionalRequirements})

    console.log("nutritonal reqs: ", nutritionalRequirements)
    reset()
    
    

  
  };



  
  
    
  return (
    <>
    
  
  
    <Button onClick={() => setOpen(true)}> Extended Search</Button>
    
    
    <Dialog 
      fullWidth
      maxWidth="md"
      open = {open}
      onClose ={() => setOpen(false)}
      aria-labelledby="'dialog-title" 
      aria-describedby="dialog-description"
    >
     
      <DialogTitle id="dialog-title"> <h4>Extended Search Options</h4></DialogTitle>
      <AdvancedFormStyle>
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
            <label htmlFor="maxCal"> Maximum Calorie: </label>
            <input placeholder = "required" type="number" id="maxCal"  defaultValue={500}{...register("maxCal", { min: 1 })} />
          </div>

          <div>
            <label htmlFor="minProtein"> Minimum Protein: </label>
            <input placeholder = "required" type="number" id="minProtein" defaultValue={1} {...register("minProtein", { min: 1 })} />
          </div>

          
          <DialogActions>
            
            <Button color="success" type="submit" autoFocus onClick={() => { setOpen(false); }}> Search <ImSpoonKnife /></Button>
           
            
            <Button color="error" onClick={() => setOpen(false)}> Cancel  <GiKnifeFork/> </Button>
           
          </DialogActions>
          
          
        </form>
       

      
        
      </DialogContent>
      </AdvancedFormStyle>
      
      
    </Dialog>
   
  

  </>

  )
}

const AdvancedFormStyle =styled.div`

section{
background-color: rgb(130, 94, 92, 0.25);
border-radius: 5px;
color:#482908;
}

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


label{
  color:#482908;
  font-weight: 600;
}


`
// const SubmitStyle =styled.div`
// box-shadow: 1px 1px 1px 1px green;
// `
// const CancelStyle =styled.div`
// box-shadow: 1px 1px 1px 1px red;

// `

export default Popup
