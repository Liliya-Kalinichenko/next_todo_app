import { deleteTodo } from '@/app/actions/todoActions';
import { Colors } from '@/app/theme/colors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react';

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
      }}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default DeleteButton
