'use client';

import { styled } from '@mui/material';
import React, { ReactNode } from 'react';

const MainContainer = styled("div", {
  name: 'MainContainer',
  slot: 'Root'
  })(({}) => ({
    position: 'relative',
  }))

function Main({children}: {children: ReactNode}) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Main;
