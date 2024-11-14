'use client';
import React from 'react';
import {
  Card,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  useTheme,
} from '@mui/material';
import data from '../../data/index.json'; // Import JSON data
import ButtonDetail from './ButtonDetail'; // Assuming ButtonDetail is in the same folder
import styles from 'src/components/BentoGrid/CardGrid.module.css'; // Import the CSS module

const CardGrid: React.FC = () => {
  const theme = useTheme();

  const cardGridData = data.content.find(
    (section) => section.type === 'CARD_GRID',
  );

  if (!cardGridData || !cardGridData.cards) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
        No card data available
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: '1196px',
        margin: '0 auto',
        gap: '20px',
        padding: { xs: '0 16px', sm: '0 20px' },
      }}
    >
      {/* Section Title */}
      <Grid item xs={12}>
        <Grid container justifyContent="center" sx={{ marginBottom: '20px' }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: { xs: '18px', sm: '20px', md: '24px', lg: '28px' }, // Responsive font size
            }}
          >
            {cardGridData.title}
          </Typography>
        </Grid>
      </Grid>

      {/* Cards Layout */}
      <Grid container spacing={2}>
        {cardGridData.cards.slice(0, 6).map((card, index) => {
          // Define grid props for responsive behavior
          let gridProps: any = { xs: 12 }; // Default to full-width on mobile

          if (index === 0) {
            // Card 1: Takes full width on xs/sm, and 6 columns on tablet
            gridProps = { xs: 12, sm: 6, tablet: 6, md: 6 }; // Card 1
          } else if (index === 1) {
            // Card 2: Takes full width on xs/sm, and 6 columns on tablet
            gridProps = { xs: 12, sm: 6, tablet: 6, md: 3 }; // Card 2
          } else if (index === 2 || index === 3) {
            gridProps = {
              xs: 12,
              sm: 6, // Full width in tablet layout
              tablet: 12,
              md: 3, // 3 columns in larger screens
            };
          } else if (index === 4) {
            gridProps = {
              xs: 12,
              sm: 6, // Moves to second row
              tablet: 6, // Half-width in tablet layout
              md: 3, // 3 columns in larger screens
            };
          } else if (index === 5) {
            gridProps = { xs: 12, sm: 12, tablet: 6, md: 6 }; // Card 6
          }

          return (
            <Grid key={index} item {...gridProps}>
              <Card
                sx={{
                  backgroundColor: theme.palette.customColor.main,
                  padding: 2,
                  height: '479px',
                  borderRadius: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className={styles.card}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={
                    card.backgroundAsset?.url || 'path/to/fallback-image.jpg'
                  }
                  alt={card.backgroundAsset?.alt || 'Fallback Image'}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />

                <CardContent
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: 0,
                    zIndex: 10,
                  }}
                >
                  <div className={styles.textContainer}>
                    {/* Title and Subtitle Container */}
                    <div className={styles.titleSubtitleContainer}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          color: 'black',
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          color: 'black',
                        }}
                      >
                        {card.title}
                      </Typography>
                    </div>

                    {/* Description Container */}
                    <div className={styles.descriptionContainer}>
                      <Typography variant="body2" sx={{ color: 'black' }}>
                        {card.description}
                      </Typography>
                    </div>

                    {/* Button Container */}
                    <div className={styles.buttonContainer}>
                      {card.cta?.url && card.cta?.text && (
                        <ButtonDetail
                          url={card.cta.url}
                          text={card.cta.text}
                          sx={{
                            width: '225px',
                            height: '60px',
                            backgroundColor: theme.palette.background.default,
                            border: '1px solid black',
                            color: 'black',
                          }}
                        />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CardGrid;
