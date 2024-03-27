"use client"

import { Todo } from '@/app/types/Todo';
import { List } from '@mui/material';
import React, { createRef } from 'react';
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {

  return (
    <List sx={{ 
      width: '100%', 
      maxWidth: 500, 
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      
    }}>
      <TransitionGroup component={null}>
        {todos.map((todo) => {
          const ref = createRef<HTMLLIElement>();

          return (
            <CSSTransition      
              timeout={1000}
              classNames="todo"
              key={todo.id}
              nodeRef={ref}
            >
              <TodoItem listItemRef={ref} todo={todo} />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </List>
  );
};

export default TodoList;
