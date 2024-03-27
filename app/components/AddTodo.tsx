'use client';

import { FormControl, TextField } from '@mui/material'
import React, { useRef } from 'react'
import AddButton from './buttons/AddButton';
import { createTodo } from '../actions/todoActions';

const AddTodo = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleAddNewTodo = async (formData: FormData) => {
    await createTodo(formData);
    form.current?.reset();
  }

  return (
    <FormControl
      component="form"
      ref={form} 
      action={handleAddNewTodo}
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        maxWidth: '500px',
        width: '100%',
      }}
    >
      <TextField
        id="standard-basic"
        label="Add new todo"
        variant="standard"
        name="input"
        sx={{flex: '1'}}
      />
      <AddButton />
    </FormControl>
  );
};

export default AddTodo;
