import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import {GiKnifeFork} from "react-icons/gi"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Popup  ()   {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit } = useForm();
  const [nutritionalRequirements, setNutritionalRequirements] = useState([])
  const navigate = useNavigate();




  const onSubmit = (data, event) => {
    event.preventDefault()
    

   
    console.log("Form data: ", data);
    const includeIngredients = data.includeIngredients;
    const maxCal = data.maxCal;
    const minProtein = data.minProtein;
    setNutritionalRequirements(data)
    console.log("ing:", includeIngredients)
    console.log("cal:", maxCal)
    console.log("pro:", minProtein)
    const resultObject = {};

    console.log(nutritionalRequirements)
    Object.entries(nutritionalRequirements).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      resultObject[key] = value;

      
      ;
    })
    console.log("results", JSON.stringify(resultObject))

    const results = JSON.stringify(resultObject)
    console.log(results)
    navigate('/filterSearched/' + results)
  
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
          <Button type="submit" autoFocus onClick={() => setOpen(false)}> Search</Button>
        </DialogActions>
      </form>

     
      
    </DialogContent>
    
  </Dialog>

  </>

  )
}


export default Popup
