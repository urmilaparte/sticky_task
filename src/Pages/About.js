

import React from 'react';
import NavBar from './NavBar';
import { Box,Typography } from '@mui/material';

function About() {
  return (
    <NavBar>
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Typography variant="h4">Welcome to the About</Typography>
      <Typography>
        This page now respects the current theme (light/dark)!
      </Typography>
    </Box>
    </NavBar>
    
  );
}

export default About;
