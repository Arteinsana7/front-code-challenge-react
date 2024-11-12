'use client';

import React from 'react';
// import { Typography, Box } from '@mui/material';
import Header from 'src/components/Header';
import BackButton from './components/BackButton';
import Footer from 'src/components/Footer';
// import ResponsiveDivider120 from 'src/components/ResponsiveDivider120';
import ResponsiveDivider80 from 'src/components/ResponsiveDivider80';
import styles from './page.module.css'; // If you need specific styles for the article page
import HeroBanner from './components/HeroBanner';
import DateAuthor from './components/DateAuthor';
import HeadingParagraph from './components/HeadingParagraph';
import SubHeadingParagraph from './components/SubHeadingParagraph';
const ArticlePage = () => {
  return (
    <main className={styles.main}>
      {/* Include the Header component */}
      <Header />
      <ResponsiveDivider80 />
      <BackButton />
      <ResponsiveDivider80 />
      <HeroBanner/>
      {/* Optional: Add a divider or other elements for spacing */}
      <ResponsiveDivider80 />
      <DateAuthor />
      <ResponsiveDivider80 />
      <HeadingParagraph />
      {/* Optional: Add a divider after the content */}
      <ResponsiveDivider80 />
      <SubHeadingParagraph />
      <ResponsiveDivider80 />
      {/* Include the Footer component */}
      <Footer />
    </main>
  );
};

export default ArticlePage;
