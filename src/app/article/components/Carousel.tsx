import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface CarouselItem {
  url: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePrevClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setFadeOut(false);
    }, 500);
  };

  const handleNextClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setFadeOut(false);
    }, 500);
  };

  const translateX = -currentIndex * 100;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '1196px',
        height: '458px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${translateX}%)`,
        }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ minWidth: '100%', height: '100%' }}>
            <img
              src={item.url}
              alt={item.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 20,
          transform: 'translateY(-50%)',
          background: 'none',
          width: '44px',
          height: '44px',
          zIndex: 1,
        }}
      >
        <ArrowBack sx={{ fontSize: '44px' }} />
      </IconButton>

      <IconButton
        onClick={handleNextClick}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          background: 'none',
          width: '44px',
          height: '44px',
          zIndex: 1,
        }}
      >
        <ArrowForward sx={{ fontSize: '44px' }} />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          left: '600px',
          bottom: '0px',
          marginBottom: '90px',
          display: 'flex',
          alignItems: 'flex-end',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          color: 'black',
          fontWeight: 300,
          fontFamily: 'Arial, sans-serif',
          textAlign: 'right',
          zIndex: 2,
        }}
      >
        <p
          style={{
            margin: 0,
            padding: '40px',
            height: '135px',
            color: 'black',
          }}
        >
          {items[currentIndex]?.description}
        </p>
      </Box>
    </Box>
  );
};

export default Carousel;
