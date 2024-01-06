import Link from "next/link";
import { useRef, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, AppBar, IconButton, List, ListItem, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { CmpjLogo } from "../Logo";
import { SwitchColorMode } from "../SwitchColorMode";

interface NavItem{
  name: string;
  href?: string;
  children?: NavItem[]
}

interface NavBarProps{
  data: NavItem[]
}

export function NavBar({data}:NavBarProps){
  const navbarRef = useRef<HTMLElement | null>(null);
  const [ menuAnchor, setMenuAnchor ] = useState<HTMLElement | null>()

  const _handleClickMenu = ()=>{
    setMenuAnchor(navbarRef.current)
  } 

  const _handleClose = ()=>{
    setMenuAnchor(null)
  }

  return (
    <AppBar ref={navbarRef} sx={{
      background: 'none'
    }} position="static">
      <Toolbar disableGutters>
        <CmpjLogo />
        <IconButton
          onClick={_handleClickMenu}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          open={!!menuAnchor}
          onClose={_handleClose}
          anchorEl={menuAnchor}
        >
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
        <Stack>

        </Stack>
        <SwitchColorMode />
      </Toolbar>
    </AppBar>
  )
}
