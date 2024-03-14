'use client';
import React from 'react';
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



const ThemeSwitcher = () => {
  const theme = useTheme();

  return (
    <>
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>

  )
}

export default ThemeSwitcher
