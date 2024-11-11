'use client';

import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import theme from '../theme';  // Import your custom theme
import Header from '../components/Header';
import BannerElement from '../components/BannerElement';
import styles from './page.module.css';
import ResponsiveDivider120 from '../components/ResponsiveDivider120';
import ResponsiveDivider80 from '../components/ResponsiveDivider80';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>  {/* Wrap your components with ThemeProvider */}
      <main className={styles.main}>
        <Header />
        <ResponsiveDivider80 />
        <BannerElement />
        <ResponsiveDivider120 />
        <CardGrid />
        <ResponsiveDivider120 />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
