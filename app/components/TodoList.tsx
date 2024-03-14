import { Todo } from '@/app/types/Todo'
import { List } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <List sx={{ 
      width: '100%', 
      maxWidth: 500, 
      bgcolor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList;
