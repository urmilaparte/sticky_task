

import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Tooltip,
  IconButton
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Create', icon: <AddBoxIcon />, path: '/create' },
    { text: 'History', icon: <HistoryIcon />, path: '/history' },
    { text: 'About', icon: <PersonIcon />, path: '/about' },
  ];

  const drawerContent = (
    <Box>
      {/* Menu toggle button */}
      <Box
        display="flex"
        justifyContent={open ? 'flex-end' : 'center'}
        alignItems="center"
        sx={{ p: 1 }}
      >
        {/* <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton> */}
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <Tooltip title={!open ? item.text : ''} placement="right">
              <ListItemIcon>{item.icon}</ListItemIcon>
            </Tooltip>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '64px',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : '64px',
            transition: 'width 0.3s ease',
            overflowX: 'hidden',
            top: '64px',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRight: '1px solid #ddd',
          },
        }}
        open={open}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;

