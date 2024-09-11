import React from 'react';
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        py: 4,
        mt: 'auto', // Ensure footer stays at the bottom of the page
        borderTop: '1px solid #e0e0e0',
        width: '100%', // Ensure footer spans full width
        overflow: 'hidden', // Prevent horizontal overflow
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow wrapping of items to prevent overflow
          }}
        >
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', sm: 'flex-end' }, flexWrap: 'wrap' }}>
            <IconButton color="inherit" component={Link} href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} href="https://twitter.com" target="_blank" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
