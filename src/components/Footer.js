// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f1f1f1',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 240, // Sidebar ki width ke according adjust
        width: 'calc(100% - 240px)',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Sticky Notes. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
