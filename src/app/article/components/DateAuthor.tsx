'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const DateAuthor: React.FC = () => {
  // Find the HERO_ARTICLE section in the article content
  const article = data.content.find(
    (section) => section.type === 'HERO_ARTICLE',
  );

  if (!article) {
    return null; // Return nothing if no article found
  }

  const { publishingDate, author } = article; // Destructure the date and author

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Always horizontal alignment
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1196px',
        margin: 'auto',
        padding: '0 20px', // Add global padding to the container
        boxSizing: 'border-box',
      }}
    >
      {/* Left container for the publishing date */}
      <Box
        sx={{
          width: { xs: '45%', sm: '250px' }, // On small screens, use 45% width for the date, 250px on larger ones
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Align text to the left
          fontStyle: 'italic',
          fontSize: {
            xs: '14px', // Adjusted font size for small screens
            sm: '16px',
            md: '18px',
            lg: '20px',
            xl: '22px',
          },
          paddingLeft: '20px', // Add padding from the left for the date
        }}
      >
        <Typography variant="body2">{publishingDate}</Typography>
      </Box>

      {/* Right container for the author */}
      <Box
        sx={{
          width: { xs: '45%', sm: '250px' }, // On small screens, use 45% width for the author, 250px on larger ones
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end', 
          fontStyle: 'italic',
          fontSize: {
            xs: '14px', 
            sm: '16px',
            md: '18px',
            lg: '20px',
            xl: '22px',
          },
          paddingRight: '20px', 
        }}
      >
        <Typography variant="body2">{author}</Typography>
      </Box>
    </Box>
  );
};

export default DateAuthor;
