import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

interface CardHoverProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

const CardHover: React.FC<CardHoverProps> = ({ title, subtitle, description, backgroundImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse hover to toggle visibility of the description
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        position: 'relative', // Make sure the text is positioned relative to the card
        height: 479, // Adjust the height based on your layout needs
        borderRadius: 0, // No rounded corners for a clean effect
        overflow: 'hidden', // To ensure no content goes outside the card's boundary
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <CardMedia
        component="img"
        alt={title}
        height="100%"
        image={backgroundImage}
        sx={{
          objectFit: 'cover', // Ensure the image covers the entire space without distortion
          width: '100%',
        }}
      />

      {/* Overlay text that appears on hover */}
      {isHovered && (
        <Box
          sx={{
            position: 'absolute', // Position the text in the center of the card
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the text horizontally and vertically
            width: 225, // Fixed width as per your requirement
            height: 136, // Fixed height as per your requirement
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for the description (semi-transparent)
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 2, // Space for the text inside the container
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      )}

      {/* Card content for the title and subtitle */}
      <CardContent sx={{ position: 'absolute', bottom: 0, padding: 1, textAlign: 'center' }}>
        <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 'bold' }}>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardHover;
