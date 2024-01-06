import Link from "next/link";
import { useRef, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, AppBar, AppBarProps, Box, IconButton, List, ListItem, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { CmpjLogo } from "../Logo";
import { SwitchColorMode } from "../SwitchColorMode/SwitchColorMode";

interface NavItem{
  name: string;
  href?: string;
  children?: NavItem[]
}

interface NavBarProps extends AppBarProps{
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
          {data.map(({name, href, children})=><MenuItem 
            key={name} 
            // @ts-ignore
            component={children? Accordion : Link}
            href={href}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {
              children  ? <AccordionSummary
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
              children && <AccordionDetails>
                <List>
                  {
                    children.map(({name, href})=>
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
        <Stack direction={'row'} sx={{
          display: {xs: 'none', md: 'flex'}
        }}>
          Aca va el menu que Luiggy va hacer para desktop
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
