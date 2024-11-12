'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const HeadingParagraph: React.FC = () => {
  // Find all PARAGRAPH items in the article content
  const paragraphs = data.content.filter((section) => section.type === 'PARAGRAPH');

  if (paragraphs.length === 0) {
    return null; 
  }

  // Function to truncate text at the word "tristique"
  const truncateAtWord = (text: string, word: string) => {
    const index = text.indexOf(word);
    if (index !== -1) {
      return text.slice(0, index + word.length); // Include the word "tristique"
    }
    return text; // If "tristique" is not found, return the full text
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '90%', md: '80%', lg: '1196px' }, // Responsive width
        maxWidth: '100%', // Ensure it doesn't overflow the viewport
        height: { xs: 'auto', md: '300px' }, // Responsive height (auto on smaller screens)
        margin: 'auto', // Center the container
        padding: { xs: '10px', sm: '20px' }, // Responsive padding
        overflowY: 'hidden', // Hide overflow content
      }}
    >
      {paragraphs.map((paragraph, index) => (
        <Box key={index} sx={{ marginBottom: { xs: '12px', sm: '16px' } }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontSize: { xs: '18px', sm: '24px', md: '28px', lg: '32px' }, // Responsive font size
              fontWeight: 'normal',
              lineHeight: { xs: '1.4', sm: '1.5' }, // Adjust line height for readability
              color: 'black', // Text color
            }}
            dangerouslySetInnerHTML={{
              __html: truncateAtWord(paragraph.text || '', 'tristique'), // Truncate text at "tristique"
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HeadingParagraph;
