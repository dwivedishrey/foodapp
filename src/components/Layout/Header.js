import React,{useState} from 'react'

import { AppBar, Box, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css"
import Logo from "../../images/logo.svg";
const Header = () => {
  const [mobileOpen,setmobileOpen]=useState(false)
  const handleDrawerToggle=()=>{
    setmobileOpen(!mobileOpen)

  }
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>

<Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1,my:2}}>
<img src={Logo} alt="logo" height={"70"} width="200" />

</Typography>
<Divider/>
  <ul className='mobile-navigation'>
    <li>
      <Link to="/">Home</Link>
      
    </li>
    <li>
      <Link to="/menu">Menu</Link>
      
    </li>
    <li>
      <Link to="/about">About</Link>
      
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
      
    </li>
  </ul>

    </Box>
  )
  return (
   <Box>
    <AppBar component={'nav'} sx={{bgcolor:"black"}}>
      <Toolbar>
        <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:'none'
      }}}  
      onClick={handleDrawerToggle}>
        <MenuIcon/>
        </IconButton>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
      <img src={Logo} alt="logo" height={"70"} width="200" />
</Typography>

<Box sx={{display:{xs:'none',sm:'block'}}}>
  <ul className='navigation-menu'>
    <li>
      <Link to="/">Home</Link>
      
    </li>
    <li>
      <Link to="/menu">Menu</Link>
      
    </li>
    <li>
      <Link to="/about">About</Link>
      
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
      
    </li>
  </ul>
</Box>
      </Toolbar>
    
    </AppBar>
    <Box component="nav">
      <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
      sx={{display:{xs:'block', sm:'none'},
      "& .MuiDrawer-paper":{
        boxSizing:"border-box",
        width:"240px",
      },
        }}>
      {drawer}
      </Drawer>
    </Box>
    <Box >
    <Toolbar/>
    </Box>
    
   </Box>
  )
}

export default Header
