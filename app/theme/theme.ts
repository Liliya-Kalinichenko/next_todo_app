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
    AppContainer: {},
    MainContainer: {}
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
      dark: Colors.dark,
    },
    divider: 'inherit',
    background: {
      default: Colors.background,
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
    MainContainer: {
      styleOverrides: {
        root: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
        }
      }
    },
    AppContainer: {},
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' }, 
          style: {
            background: Colors.h1, 
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "6rem",
            backgroundSize: "200% auto",            
          },
        },
      ],
    },
  }
});