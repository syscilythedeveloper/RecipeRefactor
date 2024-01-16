import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

import React, { useState } from 'react'


const AdvancedSearch = () => {
  const [open, setOpen] = useState(false)
  

  return (
  <>
  <Button onClick={() => setOpen(true)}> Advanced Search</Button>
  <Dialog 
    fullWidth
    maxWidth="sm"
    open = {open}
    onClose ={() => setOpen(false)}
    aria-labelledby="'dialog-title" 
    aria-describedby="dialog-description"
  >
    <DialogTitle id="dialog-title">Nutritional Requirements</DialogTitle>
    <DialogContent>
      <DialogContentText id='dialog-description'>Are you sure?</DialogContentText>
      
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
