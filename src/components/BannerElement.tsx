'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data/index.json'; // Import from the data file index.json

const BannerElement = () => {
  const theme = useTheme();

  // Extract the title from the Hero data
  const heroData = data.content[0]; // Access Hero data for the title

  // Check if cards exist, otherwise fallback to a default description
  const veniceCard = data.content[1]?.cards?.[0]; // Access Venice card data for description

  // If there's no Venice card data, fallback to a default message
  const description = veniceCard?.description || "Default description text.";

  return (
    <Container
      sx={{
        maxWidth: '1196px', // This keeps the fixed width for the outer container
        height: '480px', // This keeps the fixed height for the outer container
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center content horizontally
        margin: '0 auto', // Center horizontally within the viewport
        backgroundColor: theme.palette.background.default,
        // Responsiveness: adjusts margin based on screen size
        marginTop: {
          xs: '24px', // Smaller margin on extra small screens
          sm: '48px', // Medium margin on small screens
          md: '80px', // Larger margin on medium screens
          lg: '120px', // Full margin on large screens and up
        },
        marginBottom: {
          xs: '24px', // Smaller margin on extra small screens
          sm: '48px', // Medium margin on small screens
          md: '80px', // Larger margin on medium screens
          lg: '120px', // Full margin on large screens and up
        },
      }}
    >
      {/* Inner Container to hold title and description */}
      <Container
        sx={{
          width: '100%', // Full width of the container on smaller screens
          maxWidth: '477px', // Max width on larger screens
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end', // Align both title and description to the right
          paddingLeft: {
            xs: '24px', // Less padding on smaller screens
            sm: '48px', // Small padding on small screens
            md: '200px', // Medium padding on medium screens
            lg: '600px', // Full padding on large screens
          },
          marginRight: {
            xs: '5vw', // 5% of the viewport width on extra small devices
            sm: '4vw', // 4% on small devices
            md: '3vw', // 3% on medium devices
            lg: '2vw', // 2% on large devices
          },
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
            textAlign: 'right', 
          }}
        >
          {heroData.title}
        </Typography>

        {/* Description text from venice card */}
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
            lineHeight: '120%',
            textAlign: 'right', 
          }}
        >
          {description}
        </Typography>
      </Container>
    </Container>
  );
};

export default BannerElement;
