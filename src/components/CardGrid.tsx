"use client";
import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import data from '../data/index.json'; // Importation des données depuis le fichier JSON

function CardGrid() {
  // Access data from the JSON file
  const { content } = data;
  const heroData = content[0]; // Assuming the first object contains hero data

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%', // Making the container take full width
        maxWidth: '1196px', // Optional: if you want to keep a max width
        margin: '0 auto', // Center horizontally
        flexDirection: 'column', // Stack the content vertically
        gap: '20px', // Vertical gap between elements
        paddingLeft: { xs: 0, sm: '20px', md: '20px' }, // Padding for small and medium devices
        paddingRight: { xs: 0, sm: '20px', md: '20px' }, // Padding for small and medium devices
      }}
    >
      {/* Text container from index.json */}
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          sx={{
            marginBottom: '20px', // Space between text and the first row of cards
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'black',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            {heroData.title} {/* Assuming 'heroData.title' is the title field */}
          </Typography>
        </Grid>
      </Grid>

      {/* Grid containing the cards */}
      <Grid container spacing={2}>
        {/* First row of cards */}
        <Grid item xs={12} sm={8} md={6}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px', // Fixed height for the card
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 1</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px',
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 2</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px',
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 3</Typography>
          </Card>
        </Grid>

        {/* Second row of cards */}
        <Grid item xs={12} sm={4} md={3}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px',
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 4</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px',
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 5</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card
            sx={{
              backgroundColor: '#cce4f7',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '479px',
              borderRadius: 0,
            }}
          >
            <Typography variant="h6">Card 6</Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardGrid;
