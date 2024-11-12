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
      return text.slice(0, index + word.length);  // Include the word "tristique"
    }
    return text;  // If "tristique" is not found, return the full text
  };

  return (
    <Box
      sx={{
        width: '1196px',  // Set the width to 1196px
        height: '300px',  // Set the height to 300px
        margin: 'auto',    // Center the container
        padding: '20px',   // Add padding inside the container
        overflowY: 'hidden',  // Hide overflow content
      }}
    >
      {paragraphs.map((paragraph, index) => (
        <Box key={index} sx={{ marginBottom: '16px' }}>
          {/* Highlighted Paragraph Text */}
          {paragraph.highlight ? (
            <Typography
              variant="body1"
              component="div"  
              sx={{
                fontSize: '32px',  
                fontWeight: 'normal', 
                lineHeight: '1.5',  
                color: 'black',  
              }}
              dangerouslySetInnerHTML={{
                __html: truncateAtWord(paragraph.text || '', 'tristique'),  // Truncate text at "tristique"
              }}
            />
          ) : (
            <Typography
              variant="body1"
              component="div"  // Ensures the component is a div for the content
              sx={{
                fontSize: '32px',  // Set the font size
                fontWeight: 'normal',  
                lineHeight: '1.5',  //  Letter spacing
                color: 'black',  // Set text color to black
              }}
              dangerouslySetInnerHTML={{
                __html: truncateAtWord(paragraph.text || '', 'tristique'),  // Truncate text at "tristique"
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default HeadingParagraph;
