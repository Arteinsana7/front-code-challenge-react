'use client';

import React from 'react';
import { Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'; // Next.js navigation hook

const BackButton: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={handleBack}
      variant="text"
      color="inherit"
      sx={{
        position: 'absolute',
        top: '15%', // Default position
        left: '17%', 
        padding: '12px 24px',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        gap: '8px',
        '& .MuiButton-startIcon': {
          marginRight: '0',
        },
        // For medium devices (general tablets)
        [theme.breakpoints.down('md')]: {
          top: '10%',
          left: '3%',
          padding: '10px 20px',
          fontSize: '1rem',
        },
        // For larger tablets (e.g., iPad Pro)
        [theme.breakpoints.between('md', 'lg')]: {
          top: '12%',
          left: '5%',
          padding: '10px 22px',
          fontSize: '1.05rem',
        },
        // For small devices (e.g., smartphones)
        [theme.breakpoints.down('sm')]: {
          top: '10%',
          left: '5%',
          padding: '8px 16px',
          fontSize: '0.9rem',
        },
        
        [theme.breakpoints.down('xs')]: {
          top: '15%', 
          left: '3%', // Closer to the edge
          padding: '6px 10px', // Smaller padding for better fit
          fontSize: '0.8rem', // Smaller font size for narrow screens
        },
        // For extremely small screens (custom case)
        '@media (max-width: 320px)': {
          top: '18%', // Adjust further for very narrow screens
          left: '2%', 
          padding: '4px 8px', 
          fontSize: '0.75rem', 
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
