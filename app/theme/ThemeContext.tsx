'use client'
 
import React, { createContext, useEffect, useState } from 'react'
import { theme as initTheme } from './theme';
import { Theme } from '@emotion/react';

export const ColorModeContext = createContext({ toggleColorMode: () => {}, theme: initTheme });
 
export default function ColorModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(initTheme);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme((prevMode) => ({
          ...prevMode, 
          palette: {
            mode: prevMode.palette.mode === 'light' ? 'dark' : 'light'
          }
        }));
      },
    }),
    [],
    );
    
    useEffect(() => {

    }, [theme])


  return <ColorModeContext.Provider value={{colorMode, theme}}>{children}</ColorModeContext.Provider>
}