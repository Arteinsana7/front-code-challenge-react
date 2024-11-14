'use client'; //  Allows component to run on the client side

import { Box } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: '100%', // Full width of the parent container
        height: { xs: '60px', sm: '80px', md: '100px' }, // Responsive height
        backgroundColor: '#FF5959', // Banner color
        margin: 0,
        padding: 0,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '10px', sm: '20px', md: '30px' }, // Responsiveness
          left: { xs: '20px', sm: '60px', md: '122px' }, // Responsiveness
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={181.44}
          height={40.01}
        />
      </Box>
    </Box>
  );
};

export default Header;
