'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { routesUrl } from '@/utils/pagesurl';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;
const navItems = ['Home', 'Specialties',  'About', 'Gallery', 'Contact','SignIn'];

// Define paths for each nav item
const navPaths = {
  Home: '/',
  Specialties: '#',
  About: '/',
  Gallery: '#',
  Contact: '#',
  SignIn:routesUrl.Dashboard,
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const pathName = usePathname();
  if (pathName === routesUrl.signIn || pathName === routesUrl.signUp) {
    return null;
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <img src="/logo.png" alt="Logo" width="230" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                backgroundColor: activeItem === item ? '#f0f0f0' : 'inherit',
              }}
              onClick={() => handleNavClick(item)}
              component={Link}
              href={navPaths[item]} // Map item to route path
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: 230,
              mr: 2,
            }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) => (
              <Link key={item} href={navPaths[item]} passHref>
                <Button
                  sx={{
                    color: activeItem === item ? '#1976d2' : 'black',
                    fontSize: '15px',
                    borderBottom: activeItem === item ? '2px solid #1976d2' : 'none',
                  }}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
