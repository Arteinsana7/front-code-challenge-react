'use client';

import React from 'react';
import { Typography, Box } from '@mui/material';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ResponsiveDivider120 from 'src/components/ResponsiveDivider120';
import ResponsiveDivider80 from 'src/components/ResponsiveDivider80';
import styles from './page.module.css'; // If you need specific styles for the article page

const ArticlePage = () => {
  return (
    <main className={styles.main}>
      {/* Include the Header component */}
      <Header />

      {/* Optional: Add a divider or other elements for spacing */}
      <ResponsiveDivider80 />

      {/* Article Content */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Article Title
        </Typography>
        <Typography variant="body1">
          This is the content of the article. You can add text, images, or any
          other content here. Feel free to customize it according to your needs.
        </Typography>
      </Box>

      {/* Optional: Add a divider after the content */}
      <ResponsiveDivider120 />

      {/* Include the Footer component */}
      <Footer />
    </main>
  );
};

export default ArticlePage;
