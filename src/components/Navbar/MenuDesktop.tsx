import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { MouseEventHandler, useState } from "react";
import { NavItem } from "./types";
import Link from "next/link";

interface MenuDesktopProps extends NavItem{

}

export function MenuDesktop({ name, childrenItems, href }: Readonly<MenuDesktopProps>){
  const [anchorMenu, setAnchorMenu] = useState<HTMLElement | null>(null);

  const _handleOpen: MouseEventHandler = ({currentTarget})=>{
    if(!(currentTarget instanceof HTMLElement))
      return;
  
    setAnchorMenu(currentTarget)
  }

  const _handleClose = ()=>{
    setAnchorMenu(null)
  }

  return(
    <>
      <Button 
        endIcon={!anchorMenu ? <ExpandMore /> : <ExpandLess />}
        onClick={_handleOpen} >
        {name}
      </Button>
      <Menu
        onClose={_handleClose}
        open={!!anchorMenu}
        anchorEl={anchorMenu}
      >
        {childrenItems?.map(({name, href})=>
          // @ts-expect-error
          <MenuItem 
            key={name} 
            component={Link}
            href={href}
            sx={{display: 'flex'}}
          >
            {name}
          </MenuItem>
        )}
      </Menu>
    </>

  )
}
