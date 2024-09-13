

import React from 'react';
import { Box } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh', // Full viewport height
        overflow: 'hidden', // Hide overflow
        position: 'relative', // To position the image absolutely inside
      }}
    >
      <img
        src="https://i.ibb.co/gw46NyX/glob.jpg" // Replace with your image URL
        alt="Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensure the image covers the container
          objectPosition: 'center', // Center the image within the container
          position: 'absolute', // Position the image absolutely
          top: 0,
          left: 0,
        }}
      />
    </Box>
  );
};

export default Banner;


