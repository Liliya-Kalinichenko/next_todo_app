import { Colors } from '@/app/theme/colors';
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  onClick: () => void;
}

const ClearCompleted: React.FC<Props> = ({ onClick }) => {  
  return (
    <Button 
      onClick={onClick} 
      type='button'
      sx={{
        color: Colors.secondary, 
        display: 'flex', 
        fontSize: '0.75rem', 
        borderRadius: '10px', 
        height: '30px', 
      }}       
    >
      Clear Completed
    </Button>
  );
};

export default ClearCompleted;
