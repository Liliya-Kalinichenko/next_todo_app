import React from 'react';
import { Colors } from '@/app/theme/colors'
import { Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const ToggleAll: React.FC<Props> = ({ onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      type="button"
      sx={{
        color: Colors.secondary, 
        display: 'flex', 
        fontSize: '0.75rem', 
        borderRadius: '10px', 
        width: '140px', 
        height: '30px',
      }}       
    >
      Toggle All
    </Button>
  );
};

export default ToggleAll;
