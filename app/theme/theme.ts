'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from './colors';

declare module '@mui/material/styles' {
  interface Components {
    MainContainer:{},
    TodoContainer: {},
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.primary,
      dark: '#333333',
    },
    divider: 'inherit',
    background: {
      default: '#f68084',
      paper: '',
    },
    text: {
      primary: Colors.light,
      secondary: Colors.secondary,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MainContainer: {},
    TodoContainer: {},
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' }, 
          style: {
            background: Colors.h1, 
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "5rem",
            backgroundSize: "200% auto",
            
          },
        },
      ],
    },
  }
});