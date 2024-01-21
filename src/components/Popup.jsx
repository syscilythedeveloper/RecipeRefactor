import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import {GiKnifeFork} from "react-icons/gi"
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string'




function Popup  ()   {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit } = useForm();
  const [nutritionalRequirements, setNutritionalRequirements] = useState({ingredients:"", maxCal: 500, minProtein:1})

  const navigate = useNavigate();

  const getRequirements = () => {
    console.log("Requirements for route: ", nutritionalRequirements)
    const queryParams = queryString.stringify(nutritionalRequirements);
    console.log(queryParams)
    // const { ingredients, maxCal, minProtein } = nutritionalRequirements

    // console.log(ingredients)
    // console.log(maxCal)
    // console.log(minProtein)


    // navigate(`/filterSearched/includeIngredients:${ingredients}/maxCal:${maxCal}/minprotein:${minProtein}`)
    navigate(`/filterSearched/${queryParams}`)
    

  }
  useEffect(() => {
    // This effect will run whenever nutritionalRequirements is updated
    getRequirements();
    
  }, [nutritionalRequirements]);


  const onSubmit = (data) => {
   

    console.log("Form data: ", data);
    nutritionalRequirements.ingredients = data.includeIngredients
    nutritionalRequirements.maxCal = data.maxCal
    nutritionalRequirements.minProtein = data.minProtein
    setNutritionalRequirements({...nutritionalRequirements})

    console.log("nutritonal reqs: ", nutritionalRequirements)
    getRequirements()

  
  };



  
  
    
  return (
  <>
  <Button onClick={() => setOpen(true)}> Advanced Search</Button>
  <Dialog 
    fullWidth
    maxWidth="md"
    open = {open}
    onClose ={() => setOpen(false)}
    aria-labelledby="'dialog-title" 
    aria-describedby="dialog-description"
  >
    <DialogTitle id="dialog-title"><GiKnifeFork/></DialogTitle>
    <DialogContent>
     
        
        <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="includeIngredients"> Include Ingredients: </label>
          <input
            type="text"
            id="includeIngredients"
            {...register("includeIngredients", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <div>
          <label htmlFor="maxCal"> Maximum Calorie: </label>
          <input type="number" id="maxCal" {...register("maxCal", { min: 1 })} />
        </div>

        <div>
          <label htmlFor="minProtein"> Minimum Protein: </label>
          <input type="number" id="minProtein" {...register("minProtein", { min: 1 })} />
        </div>
        <DialogActions>
          <Button color="error" onClick={() => setOpen(false)}> Cancel </Button>
          <Button type="submit" autoFocus onClick={() => { setOpen(false); }}> Search</Button>
        </DialogActions>
      </form>

     
      
    </DialogContent>
    
  </Dialog>

  </>

  )
}


export default Popup
