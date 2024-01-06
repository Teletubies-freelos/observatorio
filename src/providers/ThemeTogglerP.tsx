'use client'

import { darkTheme, lightTheme } from "../theme";
import { CssBaseline, useMediaQuery } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren, useMemo, useState, createContext } from "react";

export const themeTogglerContext = createContext({
  toggleTheme: ()=>{}
})


export const ThemeTogglerProvider = ({ children }: PropsWithChildren)=>{
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] =  useState(()=>prefersDarkMode? 'dark' : 'light')

  const theme = useMemo(()=> colorMode === 'dark'? darkTheme: lightTheme, [colorMode])

  const toggleThemeValue = useMemo(()=>({
    toggleTheme(){
      setColorMode((prev)=> prev === 'dark'? 'light': 'dark')
    }
  }),[])

  return (<themeTogglerContext.Provider value={toggleThemeValue}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </themeTogglerContext.Provider>)
}
