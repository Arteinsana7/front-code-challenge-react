'use client';

import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'; // Next.js navigation hook

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    // If there's no previous history, go to the Home page directly
    if (window.history.length > 1) {
      router.back(); // Goes back to the previous page if there is one
    } else {
      router.push('/'); // Fallback to Home page if no history
    }
  };

  return (
    <Button
      startIcon={<ArrowBackIcon />} // Arrow icon on the left of the text
      onClick={handleBack}
      variant="text"  // No background, text only
      color="inherit" // Inherit the color, so no background is set
      sx={{
        position: 'absolute',           // Absolute positioning for more control
        top: '10%',                     // Positioning based on percentage of screen height
        left: '10%',                    // Move the button more to the left (adjusted from 50% to 10%)
        transform: 'translateX(0)',     // No need to center horizontally, so reset translateX
        width: 'auto',                  // Automatically adjust width based on content
        height: 'auto',                 // Adjust height based on content and padding
        padding: '12px 24px',           // Add padding for the button to make it more clickable
        textTransform: 'uppercase',     // Text in all capitals
        display: 'flex',                // Flexbox for layout of icon and text
        justifyContent: 'center',       // Align icon and text together
        alignItems: 'center',           // Align vertically
        minWidth: 'auto',               // Prevent stretching
        fontWeight: 'bold',             // Make the text bold
        gap: '8px',                     // Small gap between icon and text
        fontSize: '1.1rem',             // Increase font size slightly for better readability
        '& .MuiButton-startIcon': {
          marginRight: '0',             // Remove additional margin between icon and text
        },
        '@media (max-width: 768px)': {  // For mobile and smaller screens
          top: '12%',                   // Adjust top position for small screens
          padding: '10px 20px',         // Adjust padding for smaller screens
          fontSize: '1rem',             // Slightly smaller font on small screens
          left: '8%',                   // Move the button a little more to the left on small screens
        },
        '@media (max-width: 480px)': {  // For very small screens
          top: '15%',                   // Adjust further on very small screens
          padding: '8px 16px',          // Adjust padding for very small screens
          fontSize: '0.9rem',           // Smaller font size for better visibility on very small screens
          left: '5%',                   // Move the button more to the left on very small screens
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
