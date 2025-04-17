
import React from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';

const Home = () => {
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
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Typography>
        This page now respects the current theme (light/dark)!
      </Typography>
    </Box>
    </NavBar>
  );
};

export default Home;
