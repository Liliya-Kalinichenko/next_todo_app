'use client';
import { Container, styled } from '@mui/material';
import React, { ReactNode } from 'react';

const MainContainer = styled(Container, {
  name: 'MainContainer',
  slot: 'Root'
})(({}) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'center',
}))

function Main(props: {children: ReactNode}) {
  return (
    <MainContainer>
      {props.children}
    </MainContainer>
  )
}

export default Main;
