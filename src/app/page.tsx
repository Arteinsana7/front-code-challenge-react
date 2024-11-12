'use client';

import Header from '../components/Header';
import BannerElement from '../components/BannerElement';
import styles from './page.module.css';
import ResponsiveDivider120 from '../components/ResponsiveDivider120';
// import ResponsiveDivider80 from '../components/ResponsiveDivider80';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer';
// import ButtonDetail from '../components/ButtonDetail';

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <ResponsiveDivider120 />
      <BannerElement/>
      <ResponsiveDivider120 />
      <CardGrid />
      <ResponsiveDivider120 />
      {/* <ButtonDetail text={''} url={''} /> */}

      <Footer />

    </main>
  );
}
