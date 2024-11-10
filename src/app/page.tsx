'use client';

import Header from '../components/Header';
import BannerElement from '../components/BannerElement';
import styles from './page.module.css';
import ResponsiveDivider120 from '../components/ResponsiveDivider120';
import ResponsiveDivider80 from '../components/ResponsiveDivider80';

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <ResponsiveDivider80 />
      <BannerElement/>
      <ResponsiveDivider120 />
    </main>
  );
}
