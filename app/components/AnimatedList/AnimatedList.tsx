"use client"
import { Todo } from '@/app/types/Todo'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { horizontalScroll } from './animations';
import { List, ListItem } from '@mui/material';
import AnimatedItem from '../AnimatedItem';

interface Props {
  todos: Todo[];
}

const AnimatedList: React.FC<Props> = ({ todos }) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.add(horizontalScroll(triggerRef, listRef, todos.length))
  }, [])

  return (
    <div className="AnimatedList">
      <div ref={triggerRef}>
        <List sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',  
          width: `${todos.length * 100}vw`}} 
          ref={listRef} 
        >
          {todos.map((todo, i) => (
            <ListItem key={todo.id} sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',              
            }}>
              <AnimatedItem todo={todo} index={i} />
            </ListItem>
          ))}
        </List>
      </div>      
    </div>
  )
}

export default AnimatedList
