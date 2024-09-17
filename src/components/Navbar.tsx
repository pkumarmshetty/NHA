

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';

const Navbar = ({ name, button, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white' }} // Use the sx prop to apply styles
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ color: 'black' }}>
            {name}
          </Typography>
        </Box>
        {/* Render Dropdown Button and Menu only if there is data */}
        {data && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: 'black', marginRight: 2 }} // Adjust spacing if needed
            >
              Profile
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: 300, // Adjust width as needed
                  maxWidth: '100%',
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ padding: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Name:</Typography>
                    <Typography variant="body2">{data.hospitalName}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Address:</Typography>
                    <Typography variant="body2">{data.address}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Contact:</Typography>
                    <Typography variant="body2">{data.hospital_admin_mobile}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Email:</Typography>
                    <Typography variant="body2">{data.hospital_admin_email}</Typography>
                  </Box>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        )}
        {button}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

