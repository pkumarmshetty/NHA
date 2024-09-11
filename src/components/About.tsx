// pages/about.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          About Us
        </Typography>
        <Typography
         
          sx={{ lineHeight: 1.6, color: 'text.primary',textAlign: 'justify'}}
        >
          Ayushman Bharth Yogana is a pioneering initiative dedicated to promoting holistic wellness through the integration of traditional yoga practices and modern health insights. Our mission is to enhance physical, mental, and spiritual well-being by offering a comprehensive approach to yoga that caters to individuals of all levels and backgrounds. We believe in the transformative power of yoga and strive to make its benefits accessible to everyone. Through personalized guidance, expert instruction, and a supportive community, Ayushman Bharth Yogana empowers individuals to achieve their health goals, find inner balance, and lead a more harmonious life. Our programs are designed to inspire, educate, and uplift, fostering a deeper connection between body, mind, and spirit.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
