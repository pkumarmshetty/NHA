

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = ({ name, button }) => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white' }} // Use the sx prop to apply styles
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" style={{color:'black'}}>
            {name}
          </Typography>
        </Box>
        {button}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

