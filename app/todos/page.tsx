import React from 'react';
import AnimatedList from '../components/AnimatedList/AnimatedList';
import { getData } from '../actions/todoActions';
import { Box, Button, Typography } from '@mui/material';

const TodosDetails = async () => {
  const todos = await getData();

  return (
    <div>
      <Box sx={{ width: '100vw', height: '100vh'}}>        
        <Box sx={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/secondary2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: '48px',
          }}
        >
        <Typography 
          variant='h1' 
          className="shine" 
        >
          Todos Details
        </Typography>

        </Box>
      </Box>      
      <AnimatedList todos={todos} />
      <Box 
        sx={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button size="large" variant="outlined" href="/">
          Go Home
        </Button>
      </Box>
    </div>
  );
};

export default TodosDetails;
