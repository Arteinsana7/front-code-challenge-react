'use client';

import React from 'react';
import { Box } from '@mui/material';

const Card = () => {
  return (
    <Box
      sx={{
        width: '345px',
        height: '560px',
        backgroundColor: '#D1D3CA',
        // This size and position will be used for medium and large screens
        '@media (max-width: 600px)': {
          width: '300px', // Adjust size for small devices
          height: '300px', // Adjust size for small devices
        },
      }}
    />
  );
};

export default Card;
