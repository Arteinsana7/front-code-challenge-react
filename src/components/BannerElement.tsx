'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data/index.json'; // Import from the data file index.json
import Card from './Card'; // Import your CardComponent

const BannerElement = () => {
  const theme = useTheme();

  // Extract the title from the Hero data
  const heroData = data.content[0]; // Access Hero data for the title
  const backgroundAsset = heroData?.backgroundAsset; // Use optional chaining here to avoid undefined

  // Check if cards exist, otherwise fallback to a default description
  const veniceCard = data.content[1]?.cards?.[0]; // Access Venice card data for description

  // If there's no Venice card data, fallback to a default message
  const description = veniceCard?.description || "Default description text.";

  return (
    <Container
      sx={{
        width: '100%',
        maxWidth: '1196px', // This keeps the fixed width for the outer container
        height: '480px', // This keeps the fixed height for the outer container
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center content horizontally
        margin: '0 auto', // Center horizontally within the viewport
        backgroundColor: theme.palette.background.default,
        backgroundImage: backgroundAsset ? `url(${backgroundAsset.url})` : 'none', // Use a fallback if backgroundAsset is undefined
        backgroundSize: 'cover', // Ensure background image covers the container
        backgroundPosition: 'center',
        position: 'relative', // Make the parent container relative so the card can be positioned absolutely within it
        marginLeft: {
          xs: '24px', // Smaller margin on extra small screens
          sm: '48px', // Medium margin on small screens
          md: '80px', // Larger margin on medium screens
          lg: '120px', // 120px margin on large screens
        },
        marginRight: {
          xs: '24px', // Smaller margin on extra small screens
          sm: '48px', // Medium margin on small screens
          md: '80px', // Larger margin on medium screens
          lg: '120px', // 120px margin on large screens
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
          alignItems: {
            xs: 'center', // Center text on small screens
            sm: 'center', // Center text on small screens
            md: 'flex-end', // Right align on medium screens
            lg: 'flex-end', // Right align on large screens
          },
          paddingLeft: {
            xs: '0px', // Less padding on smaller screens
            sm: '0px', // Small padding on small screens
            md: '200px', // Medium padding on medium screens
            lg: '600px', // Full padding on large screens
          },
          marginRight: {
            xs: '5vw', // 5% of the viewport width on extra small devices
            sm: '4vw', // 4% on small devices
            md: '3vw', // 3% on medium devices
            lg: '2vw', // 2% on large devices
          },
          order: {
            xs: -1,  // Move the text above the card only on small screens
          },
          zIndex: {
            xs: 2,  // Ensure text is on top for small screens
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            marginBottom: {
              xs: theme.spacing(2), // Space below text on small screens
              sm: theme.spacing(1), // Adjust space for larger screens
            },
            fontFamily: "'Arial', sans-serif",
            fontSize: {
              xs: '24px',
              sm: '28px',
              md: '32px',
              lg: '36px',
            },
            lineHeight: '120%',
            textAlign: {
              xs: 'center', // Center text only on small screens
              sm: 'center', // Center text only on small screens
              md: 'right',  // Right align text on medium screens
              lg: 'right',  // Right align text on large screens
            },
          }}
        >
          {heroData.title}
        </Typography>

        {/* Description text from Venice card */}
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
            textAlign: {
              xs: 'center', // Center text only on small screens
              sm: 'center', // Center text only on small screens
              md: 'right',  // Right align text on medium screens
              lg: 'right',  // Right align text on large screens
            },
          }}
        >
          {description}
        </Typography>
      </Container>

      {/* CardComponent positioned in the middle of the left half */}
      <Box
        sx={{
          position: 'absolute',
          left: '10%', // Position it exactly in the middle of the left half
          top: '50%', // Position it vertically in the middle
          transform: 'translateY(-50%)', // Adjust for perfect vertical centering
        }}
      >
        <Card />
      </Box>
    </Container>
  );
};

export default BannerElement;
