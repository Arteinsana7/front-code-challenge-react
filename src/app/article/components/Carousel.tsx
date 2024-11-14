import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Image from 'next/image';

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
        prevIndex === 0 ? items.length - 1 : prevIndex - 1,
      );
      setFadeOut(false);
    }, 500);
  };

  const handleNextClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
      setFadeOut(false);
    }, 500);
  };

  const translateX = -currentIndex * 100;

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
        maxWidth: '1196px',
        height: { xs: '300px', sm: '450px', md: '500px', lg: '600px' },
        overflow: 'hidden',
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        aspectRatio: { xs: '1', sm: 'auto' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Carousel Images */}
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${translateX}%)`,
          flex: '1',
          overflow: 'hidden',
        }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ minWidth: '100%', height: '100%' }}>
            <Image
              src={item.url}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              priority
              quality={75}
            />
          </Box>
        ))}
      </Box>

      {/* Description Box */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '10px', sm: '20px', md: '40px' },
          left: { xs: '50%', sm: '50%', md: '57%' },
          transform: 'translateX(-50%)',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          color: 'black',
          fontWeight: 300,
          fontFamily: 'Arial, sans-serif',
          textAlign: { xs: 'right', sm: 'right', md: 'right' }, // Right-align for larger screens
          zIndex: 2,
          width: { xs: '90%', sm: '80%', md: '70%', lg: '70%' },
          maxWidth: '100%',
          fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '20px' },
          padding: '5px 10px',
        }}
      >
        <p
          style={{
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            color: 'black',
          }}
        >
          {items[currentIndex]?.description}
        </p>
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: 'absolute',
          top: '50%',
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
          top: '50%',
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
    </Box>
  );
};

export default Carousel;
