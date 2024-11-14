'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const SubHeadingParagraph: React.FC = () => {
  // Extract the first PARAGRAPH item from the article content
  const paragraph = data.content.find(
    (section) => section.type === 'PARAGRAPH',
  );

  if (!paragraph) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '945px',
        maxWidth: '100%',
        height: 'auto',
        margin: '0',
        padding: { 
          xs: '16px 20px', // More padding on small devices
          sm: '16px 32px', // Adjust padding for sm and larger
          md: '16px 24px', // Reduced padding on medium devices
          lg: '6px 2px', // Slightly less padding for large devices
        },
        overflow: 'hidden', // Hide overflow content
      }}
    >
      <Box sx={{ marginBottom: '0' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { 
              xs: '18px',  // Smaller font on xs
              sm: '20px',  // Adjust font size for sm
              md: '22px',  // Medium size font for md
              lg: '25px',  // Larger font for lg and up
            },
            fontWeight: 100,
            color: 'black',
            lineHeight: '1.5',
            whiteSpace: 'normal',
            overflow: 'hidden',
          }}
          dangerouslySetInnerHTML={{
            __html: paragraph.text || '', // Set the paragraph text
          }}
        />
      </Box>
    </Box>
  );
};

export default SubHeadingParagraph;
