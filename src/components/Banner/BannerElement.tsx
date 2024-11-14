'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../../data/index.json';
import Card from './Card';

const BannerElement = () => {
  const theme = useTheme();

  // Extract the title from the Hero data
  const heroData = data.content[0];
  const backgroundAsset = heroData?.backgroundAsset;

  // Check if cards exist, otherwise fallback to a default description
  const veniceCard = data.content[1]?.cards?.[0];
  const description = veniceCard?.description || 'Default description text.';

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
        alignItems: 'center', // This centers the whole container's content horizontally
        margin: '0 auto',
        backgroundColor: theme.palette.background.default,
        backgroundImage: backgroundAsset
          ? `url(${backgroundAsset.url})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        marginLeft: {
          xs: '24px',
          sm: '48px',
          md: '80px',
          lg: '120px',
        },
        marginRight: {
          xs: '24px',
          sm: '48px',
          md: '80px',
          lg: '120px',
        },
      }}
    >
      {/* Inner Container */}
      <Container
        sx={{
          width: '100%',
          maxWidth: '477px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: {
            xs: 'center',
            sm: 'flex-end',
            md: 'flex-end',
            lg: 'flex-end',
          },
          paddingLeft: {
            xs: '3px',
            sm: '3px',
            md: theme.spacing(10),
            lg: theme.spacing(10),
          },
          paddingRight: {
            xs: theme.spacing(3),
            sm: theme.spacing(3),
            md: theme.spacing(8),
            lg: theme.spacing(8),
          },
          marginRight: {
            xs: '3vw',
            sm: '3vw',
            md: '3vw',
            lg: '4vw',
          },
          order: {
            xs: -1, // Text appears above the card on small screens
          },
          zIndex: {
            xs: 2,
          },
          padding: {
            xs: '45px', // Apply padding around the box for small screens (10px padding for mobile)
            sm: '10px', // Keep small padding for sm screens
            md: '0px',
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
              xs: theme.spacing(2),
              sm: theme.spacing(1),
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
              xs: 'center', // Center text on small screens
              sm: 'right', // Align text to the right on small screens and up
              md: 'right', // Right-align text on medium screens and up
              lg: 'right', // Right-align text on large screens and up
            },
            paddingLeft: {
              xs: '0px', // No padding on small screens
              sm: '0px',
              md: theme.spacing(3), // Manage padding for medium screens
              lg: theme.spacing(4),
            },
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
            textAlign: {
              xs: 'center', // Center text on small screens
              sm: 'right', // Align text to the right on small screens and up
              md: 'right', // Right-align text on medium screens and up
              lg: 'right', // Right-align text on large screens and up
            },
            paddingLeft: {
              xs: '0px', // No padding on small screens
              sm: theme.spacing(27), // Adjust for sm screens
              md: theme.spacing(4), // Adjust padding for medium screens
              lg: theme.spacing(60),
            },
            marginTop: {
              xs: theme.spacing(2), // Some space between description and title
              sm: theme.spacing(1),
            },
          }}
        >
          {description}
        </Typography>
      </Container>

      {/* Card component */}
      <Box
        sx={{
          position: 'absolute',
          left: {
            xs: '50%', // Center horizontally on small screens
            sm: '10%', // Adjust for larger screens if needed
          },
          top: '50%', // Center vertically
          transform: {
            xs: 'translate(-50%, -50%)', // Center the card perfectly on small screens
            sm: 'translateY(-50%)', // Adjust for larger screens
          },
          zIndex: 1,
        }}
      >
        <Card />
      </Box>
    </Container>
  );
};

export default BannerElement;
