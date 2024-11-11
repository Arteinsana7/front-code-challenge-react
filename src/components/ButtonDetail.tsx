import React from 'react';
import { Button, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

interface ButtonDetailProps {
  text: string;
  url: string;
}

const ButtonDetail: React.FC<ButtonDetailProps> = ({ text, url }) => {
  const theme = useTheme(); // Access the theme for colors

  return (
    // Make sure the Link has no underline and matches the primary color
    <Link href={url} passHref>
      <Button
        sx={{
          width: '225px', // Button width
          height: '50px', // Button height
          backgroundColor: theme.palette.background.default, // Default background color
          border: `1px solid ${theme.palette.text.primary}`, // Border color from theme
          borderRadius: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'none', // Prevent text from being capitalized
          textDecoration: 'none', // Remove underline from Link
          '&:hover': {
            backgroundColor: theme.palette.primary.main, // Background color on hover
            borderColor: theme.palette.primary.main, // Border color on hover
          },
          // Remove the blue underline when the button is a link
          '& a': {
            textDecoration: 'none', // Remove underline from the <a> tag
            color: 'inherit', // Ensure the link text color matches the parent color
          },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary, // Set text color to match theme
            fontSize: '16px', // Adjust font size as needed
            fontWeight: 'bold', // Bold text
          }}
        >
          {text}
        </Typography>
      </Button>
    </Link>
  );
};

export default ButtonDetail;
