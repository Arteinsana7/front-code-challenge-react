// components/DateAuthor.tsx
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
        width: {
          xs: '100%', // Full width on small screens
          sm: '90%', // 90% width on medium screens
          md: '1555px', // 1555px width for larger screens
        },
        height: '42px', // Adjusted height to 42px
        margin: 'auto',
        position: 'relative',
        padding: '0 20px', // Add some padding for small screens
      }}
    >
      {/* Left container for the publishing date */}
      <Box
        sx={{
          width: '108px',
          height: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic', // Italic font style
          fontSize: {
            xs: '16px', // 16px font size on small screens
            sm: '18px', // 18px font size on medium screens
            md: '20px', // 20px font size on medium devices
            lg: '22px', // 22px font size on large devices
            xl: '24px', // 24px font size for extra-large screens
          },
        }}
      >
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          {publishingDate}
        </Typography>
      </Box>

      {/* Right container for the author */}
      <Box
        sx={{
          width: '108px',
          height: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic', // Italic font style
          fontSize: {
            xs: '16px', // 16px font size on small screens
            sm: '18px', // 18px font size on medium screens
            md: '20px', // 20px font size on medium devices
            lg: '22px', // 22px font size on large devices
            xl: '24px', // 24px font size for extra-large screens
          },
        }}
      >
        <Typography variant="body2" sx={{ textAlign: 'right' }}>
          {author}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateAuthor;
