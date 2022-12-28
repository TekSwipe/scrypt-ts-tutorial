import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {

  // call nextjs api api/scrypt/demo-counter
  function callDemoCounter() {
    axios.get('/api/scrypt/demo-counter')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <Head>
        <title>Demo sCrypt counter</title>
        <meta name="description" content="A quick app that demos the sCrypt counter app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Test Demo sCrypt-TS</h1>
        <button className={styles.button} onClick={callDemoCounter} >Test Scrypt</button>
      </main>
    </>
  )
}
