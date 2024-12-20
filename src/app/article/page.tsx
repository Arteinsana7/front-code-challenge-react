'use client';

import React from 'react';

import Header from 'src/components/Header';
import BackButton from './components/BackButton';
import Footer from 'src/components/Footer';
import ResponsiveDivider80 from 'src/components/Spacings/ResponsiveDivider80';
import ResponsiveDivider60 from 'src/components/Spacings/ResponsiveDivider60';
import styles from './page.module.css';
import HeroBanner from './components/HeroBanner';
import DateAuthor from './components/DateAuthor';
import HeadingParagraph from './components/HeadingParagraph';
import SubHeadingParagraph from './components/SubHeadingParagraph';
import Carousel from './components/Carousel'; // Ensure correct import path

import data from 'src/data/article.json'; // Import article data

const ArticlePage = () => {
  // Extract carousel items from the article content
  const carouselItems =
    data.content.find((section) => section.type === 'CAROUSEL')?.items || []; // Default to an empty array if no carousel items

  return (
    <main className={styles.main}>
      <Header />
      <ResponsiveDivider80 />
      <BackButton />
      <ResponsiveDivider80 />
      <HeroBanner />
      <ResponsiveDivider60 />
      <DateAuthor />
      <ResponsiveDivider60 />
      <HeadingParagraph />
    
      <SubHeadingParagraph />
      <ResponsiveDivider80 />

      {/* Pass the extracted carouselItems to the Carousel component */}
      <Carousel items={carouselItems} />
      <ResponsiveDivider80 />
      <SubHeadingParagraph />
      <ResponsiveDivider80 />
      <Footer />
    </main>
  );
};

export default ArticlePage;
