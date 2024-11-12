import React from 'react';
import { Box, Typography } from '@mui/material';
import data from 'src/data/article.json'; // Import the article data

const SubHeadingParagraph: React.FC = () => {
  // Extract the first PARAGRAPH item from the article content
  const paragraph = data.content.find((section) => section.type === 'PARAGRAPH');

  // If no paragraph is found, return nothing
  if (!paragraph) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '945px',  // Set the width to 945px
        maxWidth: '100%', // Make sure it's responsive
        height: 'auto',  // Allow the height to adjust based on content
        margin: 'auto',  // Center the container
        padding: '16px', // Add padding inside the container
        overflow: 'hidden', // Hide overflow content
      }}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '23px',   // Set the font size to 23px
            fontWeight: 100,    // Set the font weight to 'light' or 100 (thinner font)
            color: 'black',     // Black text color
            lineHeight: '1.5',   // Set line height for better readability
            whiteSpace: 'normal', // Allow text to wrap normally
            overflow: 'hidden',  // Ensure no overflow
          }}
          dangerouslySetInnerHTML={{
            __html: paragraph.text || '',  // Set the paragraph text
          }}
        />
      </Box>
    </Box>
  );
};

export default SubHeadingParagraph;
