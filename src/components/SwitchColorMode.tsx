'use client'

import { themeTogglerContext } from "../providers/ThemeTogglerP";
import { Switch, SwitchProps, useTheme } from "@mui/material";
import { useContext } from "react";
import { LightMode, DarkMode } from '@mui/icons-material'


export function SwitchColorMode(props: Readonly<SwitchProps>){
  const { toggleTheme } = useContext(themeTogglerContext);

  const { palette } = useTheme();

  return(
    <Switch 
      {...props} 
      onClick={toggleTheme} 
      checked={ palette.mode === 'dark'}
      checkedIcon={<DarkMode />}
      icon={<LightMode />}
    />
  )
}
