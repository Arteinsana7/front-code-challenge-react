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
        width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' }, // Responsive width
        maxWidth: '1196px', // Max width for larger screens
        height: { xs: '10%', sm: '450px', md: '500px', lg: '600px' }, // Increased height for sm, md, lg
        overflow: 'hidden',
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto', // Centering the container
        aspectRatio: { xs: '1', sm: 'auto' }, // Ensure square ratio for small screens (aspectRatio works for CSS 2D transforms)
      }}
    >
    {/* Carousel Images */}
<Box
  sx={{
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(${translateX}%)`,
    height: { xs: '500px', sm: '500px', md: 'auto', lg: 'auto' }, // Adjust height for small/medium devices, leave large unchanged
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
   {/* Left Arrow */}
<IconButton
  onClick={handlePrevClick}
  sx={{
    position: 'absolute',
    top: { xs: '50%', sm: '50%', md: '40%' }, // Move the arrow up a little on larger screens
    left: '10px',
    transform: 'translateY(-50%)',
    background: 'none',
    width: { xs: '30px', sm: '44px' },
    height: { xs: '30px', sm: '44px' },
    zIndex: 1,
  }}
>
  <ArrowBack sx={{ fontSize: { xs: '36px', sm: '44px' } }} />
</IconButton>

{/* Right Arrow */}
<IconButton
  onClick={handleNextClick}
  sx={{
    position: 'absolute',
    top: { xs: '50%', sm: '50%', md: '40%' }, // Move the arrow up a little on larger screens
    right: '10px',
    transform: 'translateY(-50%)',
    background: 'none',
    width: { xs: '36px', sm: '44px' },
    height: { xs: '36px', sm: '44px' },
    zIndex: 1,
  }}
>
  <ArrowForward sx={{ fontSize: { xs: '36px', sm: '44px' } }} />
</IconButton>



      {/* Description Box */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '10px', sm: '20px', md: '30px' }, // Adjusted bottom padding for larger screens
          left: { xs: '50%', sm: '50%', md: '55%' }, // Moves the description more to the right on larger screens
          transform: 'translateX(-50%)', // Correct centering for small and medium screens, adjusted for larger screens
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          color: 'black',
          fontWeight: 300,
          fontFamily: 'Arial, sans-serif',
          textAlign: { xs: 'center', sm: 'center', md: 'right' }, // Center text for small and medium, right-align for larger screens
          zIndex: 2,
          width: { xs: '80%', sm: '70%', md: '50%', lg: '65%' }, // Adjust width for larger screens
          fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, // Responsive font size based on screen size
        }}
      >
        <p
          style={{
            margin: 0,
            padding: '10px',
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
