import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, TextField, Input } from "@mui/material";

import React, { useState } from 'react'


const AdvancedSearch = () => {
  const [open, setOpen] = useState(false)
  

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
    <DialogTitle id="dialog-title">Nutritional Requirements</DialogTitle>
    <DialogContent>
      <Stack spacing = {2} >
        Include Ingredients: <Input id = "includeIngredients" type="text" label="includeIngredients" placeholder="Enter ingredients to include, separated by comma (e.g., chicken, onion, garlic)" /> 
        Exclude Ingredients: <Input id = "excludeIngredients" type="text" label="excludeIngredients" placeholder="Enter ingredients to exclude, separated by comma (e.g., beef, dairy, gluten)" /> 
        Minimum Calories: <Input id = "minCalories" type="number" label="minCalories" placeholder="Enter minimum calorie limit e.g., 50" /> 
        Maximum Calories: <Input id = "maxCalories" type="number" label="maxCalories" placeholder=" Enter maximum calorie limit e.g., 500" />
        Minimum Protein: <Input id = "minProtein" type="number" label="minProtein" placeholder="Specify minimum protein intake (grams)" />
        Maximum Fat: <Input id = "maxFat" type="number" label="maxFat" placeholder="Specify maximum fat content (grams)" />
        Minimum Carbs: <Input id = "minCarbs" type="number" label=" minCarbs" placeholder="Specify minimum carbohydrate intake (grams)" />
        Maximum Carbs: <Input id = "maxCarbs" type="number" label=" maxCarbs" placeholder="Specify maximum carbohydrate allowance (grams)" />
        

      </Stack>
      {/* <DialogContentText id='dialog-description'>Are you sure?</DialogContentText> */}
      
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={() => setOpen(false)}> Cancel </Button>
      <Button autoFocus onClick={() => setOpen(false)}> Search</Button>
    </DialogActions>
  </Dialog>
  </>

  )
}

export default AdvancedSearch
