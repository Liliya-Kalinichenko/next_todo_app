"use client";
import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { getData } from '../actions/todoActions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Colors } from '../theme/colors';

const TodoBox= styled(Box, {
  name: 'TodoContainer',
  slot: 'Root'
})(({}) => ({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
    borderRadius: 10,
    background: Colors.background,
    padding: '60px',
}))


const TodoContainer = ({children}: {children: ReactNode}) => {

  return (
    <TodoBox>
      {children}
    </TodoBox>
  )
}

export default TodoContainer
