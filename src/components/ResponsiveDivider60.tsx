import React from 'react';
import { Box } from '@mui/material';

const ResponsiveDivider60 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '30px', // Height for extra small screens
          sm: '40px', // Height for small screens
          md: '50px', // Height for medium screens
          lg: '60px', // Height for large screens and up
        },
      }}
    />
  );
};

export default ResponsiveDivider60;
