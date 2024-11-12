'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import data from 'src/data/article.json'; 

const HeroBanner: React.FC = () => {
  const theme = useTheme(); // Use the theme to access custom colors
  const heroContent = data.content.find((section) => section.type === 'HERO_ARTICLE');

  // Return null if heroContent or its backgroundAsset is not available
  if (!heroContent || !heroContent.backgroundAsset) return null;

  return (
    <Container
      sx={{
        display: 'flex',
        width: '100%', // Full-width container
        height: '480px', // Main container height
        padding: 0,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      {/* Left side container with background color only */}
      <Box
        sx={{
          width: '466px', // Left container width
          height: '480px', // Left container height
          backgroundColor: theme.palette.customColor.main, // Custom background color from theme
        }}
      />
      
      {/* Right side container with image and text */}
      <Box
        sx={{
          width: '730px', // Image + text container width
          height: '480px', // Image + text container height
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
            color: 'white', // White text color for contrast on image
            gap: '16px', // Added space between the subtitle and title
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
