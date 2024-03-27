"use client";

import { Box, styled } from '@mui/material';
import React, { useMemo, useState } from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import TodoList from './TodoList';
import { Status } from '../types/FilterStatus';
import { Todo } from '../types/Todo';
import { filterTodos } from '@/utils/filterTodos';
import { Colors } from '../theme/colors';

const TodoBox= styled(Box, {
  name: 'TodoContainer',
  slot: 'Root'
})(({}) => ({
    width: '60%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '40px',
    alignItems: 'center',
    borderRadius: 10,
    background: Colors.backGradient,
    padding: '40px 0px 0',
    boxShadow: Colors.boxShadow,
    overflow: 'hidden',
    marginBottom: '60px',
    transitionDuration: '2s',    
}))

interface Props {
  todos: Todo[]
}
const AppContainer: React.FC<Props> = ({ todos }) => {
  const [filterParam, setFilterParam] = useState(Status.All);
  
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, filterParam);
    
  }, [filterParam, todos]);
  
  const hasCompleted = useMemo(() => {
    return todos.some(todo => todo.isCompleted);
  }, [todos]);
  
  return (
    <TodoBox>
      <AddTodo />
      <TodoList todos={visibleTodos} />
      {!!todos.length && 
        <Footer 
          filterParam={filterParam}
          onFilterChange={setFilterParam}
          hasCompleted={hasCompleted}
        />
      }
    </TodoBox>
  );
};

export default AppContainer;
