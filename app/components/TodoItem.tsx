'use client';

import { changeStatus, deleteTodo } from '@/app/actions/todoActions';
import { Todo } from '@/app/types/Todo';
import { Box, Checkbox, CircularProgress, IconButton, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import EditTodo from './EditTodo';
import { Colors } from '../theme/colors';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import ToggleButton from './buttons/ToggleButton';
import TodoTitle from './TodoTitle';

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id, title } = todo;


  const handleToggle = () => {
    changeStatus(todo);
    setIsCompleted(!isCompleted);
  }

  const handleEditClick = () => {
  setIsEditMode(prev => !prev); 
}

const handleDelete = async() => {
    setIsLoading(true);
    setTimeout(async() => {
      try {
        await deleteTodo(id);
      } catch {
  
      } finally {
        setIsLoading(false)
      }

    }, 500)
}
  return (
    <ListItem sx={{
      border: `1px solid ${Colors.primary}`,
      borderRadius: '15px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {isLoading && <CircularProgress sx={{width: '100%', position: 'absolute'}} />}

      <Box 
         sx={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%',
          opacity: isLoading ? 0.1 : 1,
        }}>
        <ToggleButton onClick={handleToggle} isCompleted={isCompleted} />

        {!isEditMode ? (
          <TodoTitle title={title} isCompleted={isCompleted} />
        ) : (
          <EditTodo todo={todo} setIsEditMode={setIsEditMode} setIsLoading={setIsLoading} />
        )}        

        <EditButton onClick={handleEditClick} />

        <DeleteButton onClick={handleDelete} />
      </Box>
    </ListItem>
  );
};

export default TodoItem;
