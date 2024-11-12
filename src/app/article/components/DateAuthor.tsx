'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const DateAuthor: React.FC = () => {
  // Find the HERO_ARTICLE section in the article content
  const article = data.content.find((section) => section.type === 'HERO_ARTICLE');

  if (!article) {
    return null; // Return nothing if no article found
  }

  const { publishingDate, author } = article; // Destructure the date and author

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1196px', // Main the main container width to 1196px
        height: '200px', // Main container height to 200px
        margin: 'auto',
        position: 'relative',
        padding: '0 20px', //padding for small screens
      }}
    >
      {/* Left container for the publishing date */}
      <Box
        sx={{
          width: '250px', // Adjusted width for the date section
          height: '100%', // Ensure it takes up the full container height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Align the text to the left
          fontStyle: 'italic', // Italic font style
          fontSize: {
            xs: '16px', //  font size on small screens
            sm: '18px', //  font size on medium screens
            md: '20px', //  font size on medium devices
            lg: '22px', //  font size on large devices
            xl: '24px', // 2 font size for extra-large screens
          },
        }}
      >
        <Typography variant="body2">
          {publishingDate}
        </Typography>
      </Box>

      {/* Right container for the author */}
      <Box
        sx={{
          width: '250px', // Adjusted width for the author section
          height: '100%', //  it takes up the full container height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end', // Align the text to the right
          fontStyle: 'italic', // Italic font style
          fontSize: {
            xs: '16px', 
            sm: '18px', //  medium screens
            md: '20px', //  medium devices
            lg: '22px', //  large devices
            xl: '24px', //  extra-large screens
          },
        }}
      >
        <Typography variant="body2">
          {author}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateAuthor;
