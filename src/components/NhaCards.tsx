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
    title: "Innovative Housing Solutions",
    image: "https://via.placeholder.com/300x200?text=Community+Programs",
    description:
      "Explore our cutting-edge approaches to creating affordable and sustainable housing solutions.",
  },
  {
    title: "Community Enrichment Programs",
    image: "https://via.placeholder.com/300x200?text=Community+Programs",
    description:
      "Discover programs designed to enrich and strengthen our communities through various activities and support.",
  },
  {
    title: "Essential Housing Support Services",
    image: "https://via.placeholder.com/300x200?text=Housing+Support",
    description:
      "Learn about the essential support services available to assist individuals and families in securing housing.",
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
