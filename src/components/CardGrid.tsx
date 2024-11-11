"use client";
import React from 'react';
import { Card, Typography, Grid, CardMedia, CardContent, useTheme } from '@mui/material';
import data from '../data/index.json'; // Using your provided data.json structure

function CardGrid() {
  const theme = useTheme(); // Access the theme to use the custom color

  // Find the CARD_GRID object in the content array
  const cardGridData = data.content.find((section) => section.type === 'CARD_GRID');

  if (!cardGridData || !cardGridData.cards) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
        No card data available
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: '1196px',
        margin: '0 auto',
        flexDirection: 'column',
        gap: '20px',
        paddingLeft: { xs: 0, sm: '20px', md: '20px' },
        paddingRight: { xs: 0, sm: '20px', md: '20px' },
      }}
    >
      {/* Title section */}
      <Grid item xs={12}>
        <Grid container justifyContent="center" sx={{ marginBottom: '20px' }}>
          <Typography
            variant="body1"
            sx={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}
          >
            {cardGridData.title}
          </Typography>
        </Grid>
      </Grid>

      {/* Grid containing the cards */}
      <Grid container spacing={2}>
        {cardGridData.cards.slice(0, 6).map((card, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={index === 0 || index === 5 ? 8 : 4}
            md={index === 0 || index === 5 ? 6 : 3}
          >
            <Card
              sx={{
                backgroundColor: theme.palette.customColor.main, // Use custom color here
                padding: 2,
                height: '479px',
                borderRadius: 0,
                position: 'relative', // Allow absolute positioning of text
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center', // Center text horizontally
              }}
            >
              {/* CardMedia (image) */}
              <CardMedia
                component="img"
                height="100%" // Make the image take the full height of the card
                image={card.backgroundAsset.url}
                alt={card.backgroundAsset.alt}
                sx={{
                  objectFit: 'cover', // Ensure the image covers the entire space without distortion
                  width: '100%', // Ensure the image takes up full width
                }}
              />
              
              {/* Card content (text) */}
              <CardContent sx={{
                position: 'absolute', // Position the text on top of the image
                top: '50%', // Center the text vertically
                left: '50%', // Center the text horizontally
                transform: 'translate(-50%, -50%)', // Use translate to truly center the text
                padding: 0,
                zIndex: 10, // Make sure the text is on top of the image
              }}>
                {/* Render subtitle and title in uppercase */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    textAlign: 'center', // Center the text horizontally
                    color: 'black', // Set text color to black
                  }}
                >
                  {card.subtitle}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textAlign: 'center', // Center the text horizontally
                    color: 'black', // Set text color to black
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default CardGrid;
