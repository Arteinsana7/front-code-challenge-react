'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from 'src/data/article.json';

const HeroBanner: React.FC = () => {
  const theme = useTheme(); // Use the theme to access custom colors
  const heroContent = data.content.find(
    (section) => section.type === 'HERO_ARTICLE',
  );

  // Return null if heroContent or its backgroundAsset is not available
  if (!heroContent || !heroContent.backgroundAsset) return null;

  return (
    <Container
      sx={{
        display: 'flex',
        width: '100%', 
        height: '480px', 
        padding: 0,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      {/* Left side container with background color only */}
      <Box
        sx={{
          width: '466px', 
          height: '480px', 
          backgroundColor: theme.palette.customColor.main, 
        }}
      />

      {/* Right side container with image and text */}
      <Box
        sx={{
          width: '730px', 
          height: '480px', 
          backgroundImage: `url(${heroContent.backgroundAsset?.url || ''})`, // Set background image
          backgroundSize: 'cover', // Ensure image covers the container
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '35px',
        }}
      >
        {/* Text content container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right', // Align text to the right
            color: 'white', 
            gap: '16px', 
          }}
        >
          {/* Subtitle (non-bold) */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'normal', // No bold for subtitle
              fontSize: '24px',
              marginBottom: '8px',
            }}
          >
            {heroContent.subtitle}
          </Typography>

          {/* Title (bold) */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold', // Bold for title
              fontSize: '32px',
            }}
          >
            {heroContent.title}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroBanner;
