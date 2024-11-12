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
        flexDirection: { xs: 'column', sm: 'row' }, // Stack elements vertically on small screens, horizontally on larger ones
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', // Full width
        maxWidth: '1196px', // Keep the max-width consistent
        margin: 'auto',
        padding: '0 20px', // Padding for smaller screens
        boxSizing: 'border-box', // Ensure padding doesn't affect width calculation
      }}
    >
      {/* Left container for the publishing date */}
      <Box
        sx={{
          width: { xs: '100%', sm: '250px' }, // Full width on small screens, 250px on larger ones
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontStyle: 'italic',
          fontSize: {
            xs: '14px', // Adjusted font size for small screens
            sm: '16px',
            md: '18px',
            lg: '20px',
            xl: '22px',
          },
          marginBottom: { xs: '10px', sm: 0 }, // Margin between the date and author on small screens
        }}
      >
        <Typography variant="body2">
          {publishingDate}
        </Typography>
      </Box>

      {/* Right container for the author */}
      <Box
        sx={{
          width: { xs: '100%', sm: '250px' }, // Full width on small screens, 250px on larger ones
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontStyle: 'italic',
          fontSize: {
            xs: '14px', // Adjusted font size for small screens
            sm: '16px',
            md: '18px',
            lg: '20px',
            xl: '22px',
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
