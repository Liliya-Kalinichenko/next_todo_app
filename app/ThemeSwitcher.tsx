'use client';
import React from 'react';
import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './theme/ThemeContext';



const ThemeSwitcher = () => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>

  )
}

export default ThemeSwitcher
