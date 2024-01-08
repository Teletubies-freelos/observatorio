'use client';
import Link from "next/link";
import { useRef, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, AppBar, AppBarProps, Box, IconButton, List, ListItem, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { CmpjLogo } from "../Logo";
import { SwitchColorMode } from "../SwitchColorMode/SwitchColorMode";
import { NavItem } from "./types";
import { MenuDesktop } from "./MenuDesktop";


export interface NavBarProps extends AppBarProps{
  data: NavItem[]
}

export function NavBar({data, ...props}:Readonly<NavBarProps>){
  const navbarRef = useRef<HTMLElement | null>(null);
  const [ menuAnchor, setMenuAnchor ] = useState<HTMLElement | null>()

  const _handleClickMenu = ()=>{
    setMenuAnchor(navbarRef.current)
  } 

  const _handleClose = ()=>{
    setMenuAnchor(null)
  }

  return (
    <AppBar {...props} ref={navbarRef} position="static">
      <Toolbar sx={{justifyContent: 'space-between'}} disableGutters>
        <CmpjLogo />
       
        <Menu
          className={'menu--mobile'}
          open={!!menuAnchor}
          onClose={_handleClose}
          anchorEl={menuAnchor}
          PaperProps={{
            sx:{
              width: navbarRef.current? getComputedStyle(navbarRef.current).width : '100%'
            }
          }}
        >
          {/* TODO: separate responsability */}
          {data.map(({name, href, childrenItems})=><MenuItem 
            key={name} 
            // @ts-ignore
            component={childrenItems? Accordion : Link}
            href={href}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {
              childrenItems  ? <AccordionSummary
                sx={{
                  margin: 0
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={name}
                id={name}
              >
                {name}
              </AccordionSummary>:name
            }
            {
              childrenItems && <AccordionDetails>
                <List>
                  {
                    childrenItems.map(({name, href})=>
                      <ListItem 
                        key={name}
                        // @ts-ignore
                        component={Link} 
                        href={href}
                      >
                        {name}
                      </ListItem>
                    )
                  }
                </List>
              </AccordionDetails>
            }
          </MenuItem>)}
        </Menu>
        <Stack spacing={2} direction={'row'} sx={{
          display: {xs: 'none', md: 'flex'}
        }}>
          {data.map((itemData)=>(itemData.childrenItems? 
            <MenuDesktop key={itemData.name} {...itemData}/>: 
            <Link key={itemData.name} href={itemData.href ?? ''}>{itemData.name}</Link>))
          }
        </Stack>
        <SwitchColorMode />
        <IconButton
          onClick={_handleClickMenu}
          sx={{
            display:{
              md: 'none'
            }
          }}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
