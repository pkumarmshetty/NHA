// components/NhaCards.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const cardData = [
  {
    title: "Introduction to Digital Certificates",
    image: "https://i.ibb.co/tCqTSwS/omg.jpg",
    description:
    "Digital certificates serve as electronic credentials used to establish a secure connection between parties. "

  },
  {
    title: "How Digital Certificates Work",
    image: "https://i.ibb.co/tCqTSwS/omg.jpg",
    description:"Digital certificates are a key component of public key infrastructure (PKI). They consist of a public key, a private key, and a digital signature from a CA."
  },
  {
    title: "Benefits of Digital Certificates",
    image: "https://i.ibb.co/tCqTSwS/omg.jpg",
    description:"Digital certificates enhance security by providing authentication, data encryption, and digital signatures. "
  },
];

const NhaCards = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8, ml: 6, mr: 6, mt: -10 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "center", // Center-aligns the text
          width: "100%", // Ensures the Typography takes full width of its container
        }}
      >
        Our Key Initiatives
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NhaCards;
