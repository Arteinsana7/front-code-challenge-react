import React from 'react';
import { Box } from '@mui/material';

const ResponsiveDivider80 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '40px', // Height for extra small screens
          sm: '50px', // Height for small screens
          md: '60px', // Height for medium screens
          lg: '80px', // Height for large screens and up
        },
      }}
    />
  );
};

export default ResponsiveDivider80;
