

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = ({ name, button }) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#4caf50' }} // Use the sx prop to apply styles
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Box>
        {button}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

