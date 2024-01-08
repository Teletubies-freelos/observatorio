'use client'

import { useContext } from "react";
import { themeTogglerContext } from "../../providers/ThemeTogglerP";
import { Switch, SwitchProps, useTheme } from "@mui/material";
import { LightMode, DarkMode } from '@mui/icons-material'
import { darkTheme } from "../../theme";


export function SwitchColorMode(props: Readonly<SwitchProps>){
  const { toggleTheme } = useContext(themeTogglerContext);

  const { palette } = useTheme();

  return(
    <Switch 
      {...props} 
      sx={{
        "& svg":{
          transform: 'translateY(-2px)',
        }
      }}
      onClick={toggleTheme} 
      checked={ palette.mode === 'dark'}
      checkedIcon={<DarkMode/>}
      icon={<LightMode sx={{
        color: '#90caf9'
      }}/>}
    />
  )
}
