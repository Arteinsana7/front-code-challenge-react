'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data/index.json'; // Import from the data file index.json
import Card from './Card'; // Import your CardComponent

const BannerElement = () => {
  const theme = useTheme();

  // Extract the title and description
  const heroData = data.content[0];
  const veniceCard = data.content[1]?.cards?.[0];
  const description = veniceCard?.description || "Default description text.";

  return (
    <Container
      sx={{
        width: '100%',
        maxWidth: '1196px',
        height: '480px',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default,
        backgroundImage: heroData?.backgroundAsset ? `url(${heroData.backgroundAsset.url})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Card component with conditional sizing and positioning */}
      <Box
        sx={{
          position: 'absolute',
          left: '10%', // Position for larger screens
          top: '50%',  // Vertically center the card
          transform: 'translateY(-50%)', // Center it perfectly vertically
          zIndex: 1, // Ensure card appears below the text
        }}
      >
        <Card />
      </Box>

      {/* Inner container for text */}
      <Container
        sx={{
          position: 'absolute',
          top: '50%', // Center text vertically
          left: '50%', // Center text horizontally
          transform: 'translate(-50%, -50%)', // Center text
          width: '100%',
          maxWidth: '477px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Align text to the center
          textAlign: 'center',
          zIndex: 2, // Ensure text appears on top of the card
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(1),
            fontFamily: "'Arial', sans-serif",
            fontSize: {
              xs: '24px',
              sm: '28px',
              md: '32px',
              lg: '36px',
            },
            lineHeight: '120%',
          }}
        >
          {heroData.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '14px',
              sm: '16px',
              md: '18px',
              lg: '20px',
            },
            color: theme.palette.text.secondary,
            fontFamily: "'Arial', sans-serif",
            lineHeight: '140%',
          }}
        >
          {description}
        </Typography>
      </Container>
    </Container>
  );
};

export default BannerElement;
