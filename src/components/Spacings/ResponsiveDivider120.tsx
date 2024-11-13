import React from 'react';
import { Box } from '@mui/material';

const ResponsiveDivider120 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '40px', // Height for extra small screens
          sm: '60px', // Height for small screens
          md: '80px', // Height for medium screens
          lg: '120px', // Height for large screens and up
        },
      }}
    />
  );
};

export default ResponsiveDivider120;
