'use client';

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Card = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is small

  return (
    <Box
      sx={{
        width: isSmallScreen ? '300px' : '345px', // Small screen size: 300px, else 345px
        height: isSmallScreen ? '300px' : '560px', // Small screen size: 300px, else 560px
        backgroundColor: '#D1D3CA',
        position: 'relative', // Keep the card in place
        margin: '0 auto', // Center card horizontally
        zIndex: 1, // Make sure the card appears below the text
      }}
    />
  );
};

export default Card;
