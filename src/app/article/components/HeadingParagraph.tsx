'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const HeadingParagraph: React.FC = () => {
  // Find all PARAGRAPH items in the article content
  const paragraphs = data.content.filter(
    (section) => section.type === 'PARAGRAPH',
  );

  if (paragraphs.length === 0) {
    return null;
  }

  // We will always show the first paragraph
  const paragraphToShow = paragraphs[0]; 

  // Function to remove HTML tags (like <p> and others) from the text content
  const stripHtmlTags = (text: string) => {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.body.textContent || ''; // Extract the plain text from HTML
  };

  // Strip HTML tags from the paragraph text
  const plainText = stripHtmlTags(paragraphToShow.text || '');

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '90%', md: '80%', lg: '60%' }, 
        maxWidth: '100%', 
        margin: 'auto', // Center the container
        padding: { xs: '20px', sm: '20px', md: '20px' }, 
        overflowY: 'hidden', // Hide overflow content
      }}
    >
      <Box sx={{ marginBottom: '0px' }}>
        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: {
              xs: '20px', 
              sm: '24px', 
              md: '28px',
              lg: '40px',
            }, // Responsive font size
            fontWeight: 500, 
            lineHeight: { xs: '1.4', sm: '1.5' },
            color: 'black', 
            display: '-webkit-box',
            WebkitLineClamp: 3, 
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {plainText}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeadingParagraph;
