import React from 'react';
import { Card, Typography, Grid, CardMedia, CardContent, useTheme } from '@mui/material';
import data from '../data/index.json'; // Import JSON data
import ButtonDetail from './ButtonDetail'; // Assuming ButtonDetail is in the same folder
import styles from 'src/app/CardGrid.module.css'; // Import the CSS module

const CardGrid: React.FC = () => {
  const theme = useTheme();

  const cardGridData = data.content.find((section) => section.type === 'CARD_GRID');

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
        flexDirection: 'column',
        gap: '20px',
        paddingLeft: { xs: 0, sm: '20px', md: '20px' },
        paddingRight: { xs: 0, sm: '20px', md: '20px' },
      }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" sx={{ marginBottom: '20px' }}>
          <Typography
            variant="body1"
            sx={{ color: 'black', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}
          >
            {cardGridData.title}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {cardGridData.cards.slice(0, 6).map((card, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={index === 0 || index === 5 ? 8 : 4}
            md={index === 0 || index === 5 ? 6 : 3}
          >
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
                image={card.backgroundAsset?.url || 'path/to/fallback-image.jpg'}
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
        ))}
      </Grid>
    </Grid>
  );
};

export default CardGrid;