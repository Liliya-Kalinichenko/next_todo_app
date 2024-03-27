import React from 'react';
import { Colors } from '@/app/theme/colors';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

interface Props {
  onClick: () => void;
}

const EditButton: React.FC<Props> = ({ onClick }) => {

  return (
    <IconButton  
      onClick={onClick} 
      type="button" 
      aria-label="edit"
      sx={{ color: Colors.light, borderRadius: '10px'}}
    >
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
