import { Colors } from '@/app/theme/colors'
import { Button } from '@mui/material'
import React from 'react'

function AddButton() {
  return (
    <Button 
      type="submit" 
      variant="contained"
      className="button" 
      sx={{
        // background: Colors.btnBackground,
        color: Colors.light,
      }}
    >
      Add
    </Button>
  )
}

export default AddButton
