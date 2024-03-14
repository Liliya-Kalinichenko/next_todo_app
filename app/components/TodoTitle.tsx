import { ListItemText } from '@mui/material'
import React from 'react'

interface Props {
  title: string | null;
  isCompleted: boolean;
}


const TodoTitle: React.FC<Props> = ({title, isCompleted}) => {
  return (
    <ListItemText 
      sx={{
        opacity: isCompleted ? "0.3" : "1",
        textDecoration: isCompleted ? 'line-through' : 'none',
      }} 
      primary={title} 
    />
  )
}

export default TodoTitle
