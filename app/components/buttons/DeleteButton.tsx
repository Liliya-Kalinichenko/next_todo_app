import React from 'react';
import { Colors } from '@/app/theme/colors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  onClick: () => void
}

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <IconButton 
      onClick={onClick} 
      type='button' 
      aria-label="delete"
      sx={{
        color: Colors.light,
        borderRadius: '10px',
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
