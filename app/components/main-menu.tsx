'use client';
import { Box, styled } from '@mui/material';
import React from 'react';

const MainMenuFrame = styled(Box, {
  name: 'MainMenuFrameComponent',
  slot: 'Root'
})(({}) => ({}))

function MainMenu() {
  return (
    <Box>
      <MainMenuFrame>

      </MainMenuFrame>
    </Box>
  )
}

export default MainMenu
