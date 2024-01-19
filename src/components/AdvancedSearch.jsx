import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, TextField, Input } from "@mui/material";
import {GiKnifeFork} from "react-icons/gi"
import React, { useState } from 'react'
import AdvancedSearchForm from './AdvancedSearchForm';






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
    <DialogTitle id="dialog-title"><GiKnifeFork/></DialogTitle>
    <DialogContent>
      <Stack spacing = {2} >
        <AdvancedSearchForm />

      </Stack>
    
      
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
