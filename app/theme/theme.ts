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
    MainMenuFrameComponent:{}
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: 250,
          height: 400,
          border: `1px solid ${Colors.primary}`,
          borderRadius: '36px'
        }
      }
    }
  }
});