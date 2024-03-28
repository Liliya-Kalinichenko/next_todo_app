"use server"

import React from 'react';
import { getData } from '../actions/todoActions';
import AppContainer from './AppContainer';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Colors } from '../theme/colors';
import { Link } from '@mui/material';

const App = async () => {
  const todos = await getData();
  
  return (
    <>
      <AppContainer todos={todos} />
      {todos.length > 1 && (
        <Link
          className="trigger-button"
          href="/todos" 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            position: 'absolute', 
            top: '40%', 
            right: '10%', 
            color: Colors.light,
            opacity: 0,
            transform: 'translate(-60px) rotate(-90deg)',
            background: 'rgba(256, 256, 256, 0)',
            transition: 'all 0.5s',
            animation: 'fade-in 1s ease forwards', 
            '&:hover': {
              background: 'rgba(256, 256, 256, 0.1)',
            } 
          }} 
        >
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      )}      
    </>
  );
};

export default App;
