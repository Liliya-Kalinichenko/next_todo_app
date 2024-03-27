import { Colors } from '@/app/theme/colors';
import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useFormStatus } from 'react-dom';


const AddButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <Button 
      type="submit" 
      variant="contained"
      className="button"
      disabled={pending} 
      sx={{color: Colors.light}}
    >
      {pending ? <CircularProgress size={30} /> : 'Add'}
    </Button>
  );
};

export default AddButton;
