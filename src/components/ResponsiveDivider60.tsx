import React from 'react';
import { Box } from '@mui/material';

const ResponsiveDivider60 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '30px', //  extra small screens
          sm: '40px', //  small screens
          md: '50px', //  medium screens
          lg: '60px', //  large screens and up
        },
      }}
    />
  );
};

export default ResponsiveDivider60;
