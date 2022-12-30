import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import styles from './common-layout.module.scss'
import { Header } from './header/header'
import { Footer } from './footer/footer'

export const CommonLayout = ({ children }) =>
{
  let wrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [class_name, setClass_name] = useState('')
  useEffect(() => { scrollFunc(); window.addEventListener('resize', () => { scrollFunc(); }, false); }, []);
  const scrollFunc = (e) =>
  {
    let target = wrapperRef.current;
     

    let scrollTop = target.scrollTop;
    
    if (typeof scrollTop !== 'number') return;

    let cName = 'header-container';
    if (scrollTop > 100) cName = 'header-animation';
    if (cName !== class_name) setClass_name(cName);
    if (width !== target.clientWidth) setWidth(target.clientWidth);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.lotteryAppWrapper} ref={wrapperRef} onScroll={scrollFunc}>
        <section className={`header-wrapper`}>
          <Header class_name={class_name} width_={width} />
        </section>

        <section className={styles.contentSection}>
          {children}
        </section>

        <section className={styles.footerSection}>
          <Footer />
        </section>
      </main>
    </>
  )
}